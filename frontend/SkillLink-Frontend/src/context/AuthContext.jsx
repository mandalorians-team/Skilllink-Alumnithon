import React, { createContext, useState, useContext, useEffect } from "react";
import {
  loginUser as apiLogin,
  checkServerHealth,
} from "@/services/BackendServices";

// 1. Crear el Contexto
const AuthContext = createContext(null);

// Exportar el contexto para que pueda ser usado por otros archivos
export { AuthContext };

// 2. Crear el Proveedor del Contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Al iniciar, intentamos leer el usuario desde localStorage
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error al leer el usuario de localStorage", error);
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState(true); // true = disponible

  // Verificar el estado del servidor al cargar
  useEffect(() => {
    const checkServer = async () => {
      const isAvailable = await checkServerHealth();
      setServerStatus(isAvailable);
    };
    checkServer();
  }, []);

  // Función para iniciar sesión llamando a la API
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const userData = await apiLogin(email, password);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData; // Devuelve los datos por si el componente los necesita
    } catch (error) {
      // Si hay error de conexión, actualizar el estado del servidor
      if (
        error.message.includes("conexión") ||
        error.message.includes("servidor")
      ) {
        setServerStatus(false);
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Función para simular el cierre de sesión
  const logout = () => {
    setUser(null);
    // Removemos el usuario de localStorage
    localStorage.removeItem("user");
    console.log("Sesión cerrada exitosamente.");
  };

  // Función para verificar si la sesión sigue siendo válida
  const checkSession = async () => {
    if (!user) return false;

    try {
      const isAvailable = await checkServerHealth();
      setServerStatus(isAvailable);
      return isAvailable;
    } catch (error) {
      setServerStatus(false);
      return false;
    }
  };

  // El valor que se pasará a los componentes hijos
  const value = {
    user,
    setUser,
    isAuthenticated: !!user, // Booleano para saber si hay un usuario
    role: import.meta.env.VITE_SHOW_ROLES === "true" ? user?.role : null, // El rol del usuario o null
    login,
    logout,
    isLoading,
    serverStatus,
    checkSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//  un Hook personalizado para usar el contexto fácilmente
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
