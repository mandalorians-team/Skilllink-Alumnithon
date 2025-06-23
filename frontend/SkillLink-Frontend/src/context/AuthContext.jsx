import React, { createContext, useState, useContext } from "react";
import { loginUser as apiLogin } from "@/services/BackendServices";

// 1. Crear el Contexto
const AuthContext = createContext(null);

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

  // Función para iniciar sesión llamando a la API
  const login = async (email, password) => {
    const userData = await apiLogin(email, password);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return userData; // Devuelve los datos por si el componente los necesita
  };

  // Función para simular el cierre de sesión
  const logout = () => {
    setUser(null);
    // Removemos el usuario de localStorage
    localStorage.removeItem("user");
    console.log("Simulando cierre de sesión.");
  };

  // El valor que se pasará a los componentes hijos
  const value = {
    user,
    isAuthenticated: !!user, // Booleano para saber si hay un usuario
    role: user?.role, // El rol del usuario o null
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Crear un Hook personalizado para usar el contexto fácilmente
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
