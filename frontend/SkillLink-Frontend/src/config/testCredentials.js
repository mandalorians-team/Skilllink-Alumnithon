// Credenciales de prueba para desarrollo
// Estas credenciales coinciden con los usuarios en db.json
export const TEST_CREDENTIALS = {
  APRENDIZ: {
    email: "aprendiz@skilllink.com",
    password: "password123",
    role: "aprendiz"
  },
  MENTOR: {
    email: "mentor@skilllink.com",
    password: "password123",
    role: "mentor"
  },
  ADMIN: {
    email: "admin@skilllink.com",
    password: "password123",
    role: "admin"
  }
};

// Función para obtener credenciales de prueba por rol
export const getTestCredentials = (role) => {
  switch (role.toLowerCase()) {
    case 'aprendiz':
      return TEST_CREDENTIALS.APRENDIZ;
    case 'mentor':
      return TEST_CREDENTIALS.MENTOR;
    case 'admin':
      return TEST_CREDENTIALS.ADMIN;
    default:
      return null;
  }
};

// Función para verificar si estamos en modo desarrollo
export const isDevelopment = () => {
  return import.meta.env.DEV || import.meta.env.MODE === 'development';
};