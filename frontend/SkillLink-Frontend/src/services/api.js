<<<<<<< Updated upstream
// Usar la variable de entorno del .env o el puerto 8080 con prefijo /api como fallback
export const API_URL = import.meta.env.VITE_API_URL;
||||||| Stash base
// Usar la variable de entorno del .env o el proxy de Vite como fallback
export const API_URL = import.meta.env.VITE_API_URL || "/api";
=======
// Usar la variable de entorno del .env o el puerto 8080 con prefijo /api como fallback
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080 /api";
>>>>>>> Stashed changes

// URL sin prefijo /api (comentada para referencia)
// export const API_URL = "http://localhost:8080";
