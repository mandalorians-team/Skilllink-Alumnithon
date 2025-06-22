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

// Puedes añadir más funciones de servicio aquí a medida que las necesites
// Por ejemplo:
// export const getProjects = async () => { ... }
