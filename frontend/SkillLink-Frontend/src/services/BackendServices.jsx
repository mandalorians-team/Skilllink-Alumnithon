const API_URL = "/api";

export const getAllCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const getCourseById = async (courseId) => {
  try {
    const response = await fetch(`${API_URL}/courses/${courseId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching course with id ${courseId}:`, error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    // 1. Obtenemos TODOS los usuarios (esto es solo para la simulación)
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error("No se pudo conectar con el servidor.");
    }
    const users = await response.json();

    // 2. Buscamos un usuario que coincida con el email y la contraseña
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // 3. Si se encuentra, devolvemos los datos del usuario (sin la contraseña)
      // eslint-disable-next-line no-unused-vars
      const { password: _password, ...userWithoutPassword } = foundUser;
      return userWithoutPassword;
    } else {
      // 4. Si no, lanzamos un error
      throw new Error("Credenciales inválidas.");
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error.message);
    throw error; // Re-lanzamos el error para que el componente que llama lo maneje
  }
};

// Puedes añadir más funciones de servicio aquí a medida que las necesites
// Por ejemplo:
// export const getProjects = async () => { ... }
