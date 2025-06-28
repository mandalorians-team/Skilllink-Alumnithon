// Usar la variable de entorno del .env o el puerto 8080 con prefijo /api como fallback
export const API_URL = import.meta.env.VITE_API_URL;

// URL sin prefijo /api (comentada para referencia)
// export const API_URL = "http://localhost:8080";
    