import { Await } from "react-router-dom";
import { API_URL } from "./api";

// Función para verificar si el servidor está disponible

export const checkServerHealth = async () => {

  try{
    const response = await fetch(`${API_URL}/users`);
    const response = await fetch(`${API_URL}/users`);
    return response.ok
  }catch(error){
    return false;
  }

}

// ===== FUNCIONES PARA OBTENER INFO DEL USUARIO Y PODER INICIAR SECION DEPENDIENDO EL ROL=====
export async function getUserInfo() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No hay token disponible");
  }

  const response = await fetch(`${API_URL}/users/api/info`, {
  const response = await fetch(`${API_URL}/users/api/info`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error al obtener datos: ${errorText}`);
  }

  const text = await response.text();

  // Parsear el string para extraer nombre, rol y email
  const nameMatch = text.match(/User info for:\s*(.*?),/);
  const roleMatch = text.match(/Role:\s*(\w+),/);
  const emailMatch = text.match(/Email:\s*(.+)/);

  return {
    name: nameMatch ? nameMatch[1] : null,
    role: roleMatch ? roleMatch[1] : null,
    email: emailMatch ? emailMatch[1] : null
  };
}

// FUNCIONES PARA CURSOS
export const getAllCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    if (!response.ok) {
      throw new Error("Error al cargar los cursos");
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
      throw new Error("Curso no encontrado");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching course with id ${courseId}:`, error);
    throw error;
  }
};

export const getCoursesByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/courses?category=${category}`);
    if (!response.ok) {
      throw new Error("Error al cargar cursos por categoría");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses by category:", error);
    throw error;
  }
};

export const searchCourses = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}/courses?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Error en la búsqueda de cursos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error searching courses:", error);
    throw error;
  }
};

// FUNCIONES PARA USUARIOS 
export const getAllUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error("Error al cargar usuarios");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error("Usuario no encontrado");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user with id ${userId}:`, error);
    throw error;
  }
};

export const getUsersByRole = async (role) => {
  try {
    const response = await fetch(`${API_URL}/users?role=${role}`);
    if (!response.ok) {
      throw new Error("Error al cargar usuarios por rol");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users by role:", error);
    throw error;
  }
};

// FUNCIONES PARA PROYECTOS
export const getAllProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error("Error al cargar proyectos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getProjectById = async (projectId) => {
  try {
    const response = await fetch(`${API_URL}/projects/${projectId}`);
    if (!response.ok) {
      throw new Error("Proyecto no encontrado");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching project with id ${projectId}:`, error);
    throw error;
  }
};

export const getProjectsByStatus = async (status) => {
  try {
    const response = await fetch(`${API_URL}/projects?status=${status}`);
    if (!response.ok) {
      throw new Error("Error al cargar proyectos por estado");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects by status:", error);
    throw error;
  }
};

export const getProjectsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/projects?category=${category}`);
    if (!response.ok) {
      throw new Error("Error al cargar proyectos por categoría");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects by category:", error);
    throw error;
  }
};

// FUNCIONES PARA MENTORÍAS
export const getAllMentorships = async () => {
  try {
    const response = await fetch(`${API_URL}/mentorships`);
    if (!response.ok) {
      throw new Error("Error al cargar mentorías");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching mentorships:", error);
    throw error;
  }
};

export const getMentorshipById = async (mentorshipId) => {
  try {
    const response = await fetch(`${API_URL}/mentorships/${mentorshipId}`);
    if (!response.ok) {
      throw new Error("Mentoría no encontrada");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching mentorship with id ${mentorshipId}:`, error);
    throw error;
  }
};

export const getMentorshipsByMentor = async (mentorId) => {
  try {
    const response = await fetch(`${API_URL}/mentorships?mentorId=${mentorId}`);
    if (!response.ok) {
      throw new Error("Error al cargar mentorías del mentor");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching mentorships by mentor:", error);
    throw error;
  }
};

export const getMentorshipsByStudent = async (studentId) => {
  try {
    const response = await fetch(
      `${API_URL}/mentorships?studentId=${studentId}`
    );
    if (!response.ok) {
      throw new Error("Error al cargar mentorías del estudiante");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching mentorships by student:", error);
    throw error;
  }
};

// FUNCIONES PARA LECCIONES Y MÓDULOS
export const getLessonsByCourse = async (courseId) => {
  try {
    const response = await fetch(`${API_URL}/courses/${courseId}/lessons`);
    if (!response.ok) {
      throw new Error("Error al cargar lecciones del curso");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching lessons by course:", error);
    throw error;
  }
};

export const getLessonById = async (courseId, lessonId) => {
  try {
    const response = await fetch(
      `${API_URL}/courses/${courseId}/lessons/${lessonId}`
    );
    if (!response.ok) {
      throw new Error("Lección no encontrada");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching lesson with id ${lessonId}:`, error);
    throw error;
  }
};

// ===== FUNCIONES PARA INSCRIPCIONES =====
export const getUserEnrollments = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/enrollments?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Error al cargar inscripciones del usuario");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user enrollments:", error);
    throw error;
  }
};

export const enrollInCourse = async (userId, courseId) => {
  try {
    const response = await fetch(`${API_URL}/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, courseId }),
    });
    if (!response.ok) {
      throw new Error("Error al inscribirse en el curso");
    }
    return await response.json();
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

// FUNCIONES PARA PROGRESO
export const updateLessonProgress = async (
  userId,
  courseId,
  lessonId,
  progress
) => {
  try {
    const response = await fetch(`${API_URL}/progress`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, courseId, lessonId, progress }),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el progreso");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating lesson progress:", error);
    throw error;
  }
};

export const getCourseProgress = async (userId, courseId) => {
  try {
    const response = await fetch(
      `${API_URL}/progress?userId=${userId}&courseId=${courseId}`
    );
    if (!response.ok) {
      throw new Error("Error al cargar el progreso del curso");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching course progress:", error);
    throw error;
  }
};

// ===== FUNCIONES PARA BÚSQUEDA GENERAL =====
export const searchAll = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}/search?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Error en la búsqueda");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in general search:", error);
    throw error;
  }
};

// ===== FUNCIONES PARA ESTADÍSTICAS =====
export const getDashboardStats = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/stats/dashboard?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Error al cargar estadísticas del dashboard");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};

export const getCourseStats = async (courseId) => {
  try {
    const response = await fetch(`${API_URL}/stats/courses/${courseId}`);
    if (!response.ok) {
      throw new Error("Error al cargar estadísticas del curso");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching course stats:", error);
    throw error;
  }
};

// ===== FUNCIONES PARA NOTIFICACIONES =====
export const getUserNotifications = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/notifications?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Error al cargar notificaciones");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user notifications:", error);
    throw error;
  }
};

export const markNotificationAsRead = async (notificationId) => {
  try {
    const response = await fetch(`${API_URL}/notifications/${notificationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ read: true }),
    });
    if (!response.ok) {
      throw new Error("Error al marcar notificación como leída");
    }
    return await response.json();
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

// ===== FUNCIONES PARA AUTENTICACIÓN =====
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      let errorMsg = "Error en el inicio de sesión";
      try {
        const errorData = await response.json();
        errorMsg = errorData.message || errorMsg;
      } catch (error) {
        console.error("Error parsing error response:", error);
      }
      throw new Error(errorMsg);
    }
    const data = await response.json();
    return data.user || data;
  } catch (error) {
    throw new Error(error.message || "Error de red en login");
  }
};

export async function registerUser(userData) {
  try {
    console.log("Enviando datos de registro:", userData);
    console.log("URL de la API:", `https://skilllink-alumnithon.onrender.com/api/auth/register`);

    const response = await fetch(`$https://skilllink-alumnithon.onrender.com/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log("Response status:", response.status);
    console.log("Response statusText:", response.statusText);
    console.log("Response headers:", response.headers);

    if (!response.ok) {
      // Intentar leer el error como JSON, pero manejar respuestas vacías
      let errorMessage = "Error en el registro";
      try {
        const errorText = await response.text();
        console.log("Error response text:", errorText);
        if (errorText) {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorData.error || errorMessage;
        }
      } catch (parseError) {
        console.error("Error parsing error response:", parseError);
        errorMessage = `Error ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    // Verificar si la respuesta tiene contenido antes de parsear
    const responseText = await response.text();
    console.log("Success response text:", responseText);
    if (!responseText) {
      return { success: true, message:  "Usuario registrado exitosamente" };
    }

    return JSON.parse(responseText);
  } catch (error) {
    console.error("Error completo en registerUser:", error);
    console.error("Error stack:", error.stack);
    throw error;
  }
}

// ===== FUNCIONES UTILITARIAS =====
export const handleApiError = (error) => {
  console.error("API Error:", error);

  if (error.message.includes("Failed to fetch")) {
    return "Error de conexión. Verifica tu conexión a internet.";
  }

  if (error.message.includes("404")) {
    return "Recurso no encontrado.";
  }

  if (error.message.includes("500")) {
    return "Error interno del servidor. Inténtalo más tarde.";
  }

  return error.message || "Error desconocido";
};

// Función para hacer peticiones con timeout
export const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error("La petición tardó demasiado tiempo");
    }
    throw error;
  }
};
