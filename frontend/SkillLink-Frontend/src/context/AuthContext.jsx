import React, { createContext, useState, useEffect, useContext } from "react";

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
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error al leer el usuario de localStorage", error);
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState(true);

  useEffect(() => {
    const checkServer = async () => {
      const isAvailable = await checkServerHealth();
      setServerStatus(isAvailable);
    };
    checkServer();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const userData = await apiLogin(email, password);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("Sesión cerrada exitosamente.");
  };

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

  const value = {
    user,
    setUser,
    isAuthenticated: !!user,
    role: import.meta.env.VITE_SHOW_ROLES === "true" ? user?.role : null,
    login,
    logout,
    isLoading,
    serverStatus,
    checkSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
