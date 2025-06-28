# Guía de Uso de la API - SkillLink Frontend

## 📋 Índice

1. [Configuración](#configuración)
2. [Funciones de API](#funciones-de-api)
3. [Hooks Personalizados](#hooks-personalizados)
4. [Ejemplos de Uso](#ejemplos-de-uso)
5. [Manejo de Errores](#manejo-de-errores)
6. [Mejores Prácticas](#mejores-prácticas)

## 🔧 Configuración

### Variables de Entorno

Asegúrate de tener configurado el archivo `.env.example`:

```env
VITE_API_URL=http://localhost:8080
```

### Estructura de Archivos

```
src/
├── services/
│   ├── api.js                    # Configuración de la API
│   └── BackendServices.jsx       # Funciones de API
├── hooks/
│   └── useApi.js                 # Hooks personalizados
└── components/
    └── examples/
        └── ApiDataExample.jsx    # Ejemplos de uso
```

## 🚀 Funciones de API

### Cursos

```javascript
import {
  getAllCourses,
  getCourseById,
  getCoursesByCategory,
  searchCourses,
} from "@/services/BackendServices";

// Obtener todos los cursos
const courses = await getAllCourses();

// Obtener un curso específico
const course = await getCourseById(1);

// Obtener cursos por categoría
const devCourses = await getCoursesByCategory("desarrollo");

// Buscar cursos
const searchResults = await searchCourses("React");
```

### Usuarios

```javascript
import {
  getAllUsers,
  getUserById,
  getUsersByRole,
} from "@/services/BackendServices";

// Obtener todos los usuarios
const users = await getAllUsers();

// Obtener usuario específico
const user = await getUserById(1);

// Obtener usuarios por rol
const mentors = await getUsersByRole("mentor");
```

### Proyectos

```javascript
import {
  getAllProjects,
  getProjectById,
  getProjectsByStatus,
  getProjectsByCategory,
} from "@/services/BackendServices";

// Obtener todos los proyectos
const projects = await getAllProjects();

// Obtener proyecto específico
const project = await getProjectById(1);

// Obtener proyectos por estado
const activeProjects = await getProjectsByStatus("active");

// Obtener proyectos por categoría
const webProjects = await getProjectsByCategory("web");
```

### Mentorías

```javascript
import {
  getAllMentorships,
  getMentorshipById,
  getMentorshipsByMentor,
  getMentorshipsByStudent,
} from "@/services/BackendServices";

// Obtener todas las mentorías
const mentorships = await getAllMentorships();

// Obtener mentoría específica
const mentorship = await getMentorshipById(1);

// Obtener mentorías de un mentor
const mentorMentorships = await getMentorshipsByMentor(1);

// Obtener mentorías de un estudiante
const studentMentorships = await getMentorshipsByStudent(1);
```

### Inscripciones y Progreso

```javascript
import {
  getUserEnrollments,
  enrollInCourse,
  updateLessonProgress,
  getCourseProgress,
} from "@/services/BackendServices";

// Obtener inscripciones del usuario
const enrollments = await getUserEnrollments(1);

// Inscribirse en un curso
const enrollment = await enrollInCourse(1, 1); // userId, courseId

// Actualizar progreso de lección
await updateLessonProgress(1, 1, 1, 100); // userId, courseId, lessonId, progress

// Obtener progreso del curso
const progress = await getCourseProgress(1, 1);
```

### Búsqueda y Estadísticas

```javascript
import {
  searchAll,
  getDashboardStats,
  getCourseStats,
} from "@/services/BackendServices";

// Búsqueda general
const searchResults = await searchAll("React");

// Estadísticas del dashboard
const stats = await getDashboardStats(1);

// Estadísticas de un curso
const courseStats = await getCourseStats(1);
```

### Notificaciones

```javascript
import {
  getUserNotifications,
  markNotificationAsRead,
} from "@/services/BackendServices";

// Obtener notificaciones del usuario
const notifications = await getUserNotifications(1);

// Marcar notificación como leída
await markNotificationAsRead(1);
```

## 🎣 Hooks Personalizados

### useApiData - Carga Automática

```javascript
import { useApiData } from "@/hooks/useApi";
import { getAllCourses } from "@/services/BackendServices";

function CoursesList() {
  const { data: courses, loading, error, refetch } = useApiData(getAllCourses);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {courses?.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
      <button onClick={refetch}>Recargar</button>
    </div>
  );
}
```

### useApi - Peticiones Manuales

```javascript
import { useApi } from "@/hooks/useApi";
import { getCourseById } from "@/services/BackendServices";

function CourseDetail({ courseId }) {
  const { data: course, loading, error, execute } = useApi(getCourseById);

  const loadCourse = () => {
    execute(courseId);
  };

  return (
    <div>
      <button onClick={loadCourse}>Cargar Curso</button>
      {loading && <div>Cargando...</div>}
      {error && <div>Error: {error}</div>}
      {course && <div>{course.title}</div>}
    </div>
  );
}
```

### useSearchApi - Búsquedas con Debounce

```javascript
import { useSearchApi } from "@/hooks/useApi";
import { searchCourses } from "@/services/BackendServices";

function CourseSearch() {
  const {
    data: results,
    loading,
    error,
    setSearch,
  } = useSearchApi(searchCourses, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar cursos..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <div>Buscando...</div>}
      {error && <div>Error: {error}</div>}
      {results?.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
}
```

### useApiMutation - Operaciones POST/PUT/DELETE

```javascript
import { useApiMutation } from "@/hooks/useApi";
import { enrollInCourse } from "@/services/BackendServices";

function EnrollmentForm() {
  const { loading, error, success, execute } = useApiMutation(enrollInCourse);

  const handleEnroll = async () => {
    try {
      await execute(1, 1); // userId, courseId
      alert("Inscripción exitosa!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleEnroll} disabled={loading}>
        {loading ? "Inscribiendo..." : "Inscribirse"}
      </button>
      {error && <div>Error: {error}</div>}
      {success && <div>¡Inscripción exitosa!</div>}
    </div>
  );
}
```

## 📝 Ejemplos de Uso

### Ejemplo Completo: Dashboard con Múltiples Datos

```javascript
import React from "react";
import { useApiData } from "@/hooks/useApi";
import {
  getAllCourses,
  getAllProjects,
  getUserEnrollments,
  getDashboardStats,
} from "@/services/BackendServices";

function Dashboard({ userId }) {
  const { data: courses, loading: coursesLoading } = useApiData(getAllCourses);
  const { data: projects, loading: projectsLoading } =
    useApiData(getAllProjects);
  const { data: enrollments, loading: enrollmentsLoading } = useApiData(
    () => getUserEnrollments(userId),
    [userId]
  );
  const { data: stats, loading: statsLoading } = useApiData(
    () => getDashboardStats(userId),
    [userId]
  );

  const isLoading =
    coursesLoading || projectsLoading || enrollmentsLoading || statsLoading;

  if (isLoading) return <div>Cargando dashboard...</div>;

  return (
    <div className="dashboard">
      <div className="stats">
        <h2>Estadísticas</h2>
        <p>Cursos inscritos: {enrollments?.length || 0}</p>
        <p>
          Proyectos activos:{" "}
          {projects?.filter((p) => p.status === "active").length || 0}
        </p>
      </div>

      <div className="courses">
        <h2>Mis Cursos</h2>
        {enrollments?.map((enrollment) => (
          <div key={enrollment.id}>
            {courses?.find((c) => c.id === enrollment.courseId)?.title}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Ejemplo: Búsqueda Avanzada

```javascript
import React, { useState } from "react";
import { useSearchApi } from "@/hooks/useApi";
import { searchAll } from "@/services/BackendServices";

function AdvancedSearch() {
  const [searchType, setSearchType] = useState("all");
  const { data: results, loading, error, setSearch } = useSearchApi(searchAll);

  const handleSearch = (query) => {
    const searchQuery = searchType === "all" ? query : `${searchType}:${query}`;
    setSearch(searchQuery);
  };

  return (
    <div>
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}>
        <option value="all">Todo</option>
        <option value="courses">Cursos</option>
        <option value="projects">Proyectos</option>
        <option value="mentors">Mentores</option>
      </select>

      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {loading && <div>Buscando...</div>}
      {error && <div>Error: {error}</div>}

      {results && (
        <div>
          {results.courses?.map((course) => (
            <div key={course.id}>Curso: {course.title}</div>
          ))}
          {results.projects?.map((project) => (
            <div key={project.id}>Proyecto: {project.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## ⚠️ Manejo de Errores

### Errores Comunes

```javascript
import { handleApiError } from "@/services/BackendServices";

try {
  const data = await getAllCourses();
} catch (error) {
  const errorMessage = handleApiError(error);
  console.error(errorMessage);
  // Mostrar mensaje al usuario
}
```

### Estados de Error en Hooks

```javascript
function MyComponent() {
  const { data, loading, error, refetch } = useApiData(getAllCourses);

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <button onClick={refetch}>Reintentar</button>
      </div>
    );
  }

  // Resto del componente...
}
```

## 🎯 Mejores Prácticas

### 1. Usar Hooks Apropiados

- **useApiData**: Para datos que se cargan automáticamente
- **useApi**: Para peticiones manuales o condicionales
- **useSearchApi**: Para búsquedas con debounce
- **useApiMutation**: Para operaciones que modifican datos

### 2. Manejo de Estados de Carga

```javascript
// ✅ Correcto
if (loading) return <LoadingSpinner />;

// ❌ Incorrecto
if (loading) return <div>Cargando...</div>;
```

### 3. Validación de Datos

```javascript
// ✅ Correcto
{
  courses?.map((course) => <CourseCard key={course.id} course={course} />);
}

// ❌ Incorrecto
{
  courses.map((course) => <CourseCard key={course.id} course={course} />);
}
```

### 4. Optimización de Re-renders

```javascript
// ✅ Correcto - Dependencias específicas
const { data } = useApiData(() => getUserEnrollments(userId), [userId]);

// ❌ Incorrecto - Sin dependencias
const { data } = useApiData(() => getUserEnrollments(userId));
```

### 5. Manejo de Errores Consistente

```javascript
// ✅ Correcto - Usar handleApiError
const errorMessage = handleApiError(error);

// ❌ Incorrecto - Mostrar error directo
const errorMessage = error.message;
```

## 🔧 Configuración del Backend

Para que estas funciones funcionen correctamente, tu backend debe tener los siguientes endpoints:

### Endpoints Requeridos

```
GET    /api/courses              # Listar cursos
GET    /api/courses/:id          # Obtener curso específico
GET    /api/users                # Listar usuarios
GET    /api/users/:id            # Obtener usuario específico
GET    /api/projects             # Listar proyectos
GET    /api/projects/:id         # Obtener proyecto específico
GET    /api/mentorships          # Listar mentorías
GET    /api/mentorships/:id      # Obtener mentoría específica
POST   /api/enrollments          # Crear inscripción
PUT    /api/progress             # Actualizar progreso
GET    /api/search               # Búsqueda general
GET    /api/stats/dashboard      # Estadísticas del dashboard
GET    /api/notifications        # Notificaciones del usuario
```

### Estructura de Respuesta Esperada

```json
{
  "data": [...],
  "message": "Operación exitosa",
  "status": "success"
}
```

## 📚 Recursos Adicionales

- [Documentación de Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [JSON Server Documentation](https://github.com/typicode/json-server)

---

¿Necesitas ayuda con alguna función específica? ¡Revisa los ejemplos en `src/components/examples/ApiDataExample.jsx`!
