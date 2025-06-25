// Usar la variable de entorno del .env o el proxy de Vite como fallback
export const API_URL = import.meta.env.VITE_API_URL || "/api";

// URL directa (comentada para referencia)
// export const API_URL = "http://localhost:8081";
