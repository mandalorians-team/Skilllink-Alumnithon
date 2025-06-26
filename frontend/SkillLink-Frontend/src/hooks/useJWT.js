import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const useJWT = () => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("🔓 Token decodificado:", decoded);

        // Verificar si el token no ha expirado
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp > currentTime) {
          setDecodedToken(decoded);
          setIsValid(true);
        } else {
          console.log("❌ Token expirado");
          localStorage.removeItem("token");
          setDecodedToken(null);
          setIsValid(false);
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        localStorage.removeItem("token");
        setDecodedToken(null);
        setIsValid(false);
      }
    } else {
      setDecodedToken(null);
      setIsValid(false);
    }
  }, []);

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log("🔓 Token decodificado:", decoded);
      return decoded;
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      return null;
    }
  };

  const saveToken = (token) => {
    localStorage.setItem("token", token);
    const decoded = decodeToken(token);
    setDecodedToken(decoded);
    setIsValid(true);
    return decoded;
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setDecodedToken(null);
    setIsValid(false);
  };

  return {
    decodedToken,
    isValid,
    decodeToken,
    saveToken,
    removeToken
  };
};