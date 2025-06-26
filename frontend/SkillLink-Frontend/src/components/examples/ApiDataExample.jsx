import React, { useState } from "react";
import {
  useApiData,
  useApi,
  useSearchApi,
  useApiMutation,
} from "../../hooks/useApi";
import {
  getAllCourses,
  getCourseById,
  searchCourses,
  getAllProjects,
  getAllMentorships,
  enrollInCourse,
} from "../../services/BackendServices";

export default function ApiDataExample() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [enrollmentData, setEnrollmentData] = useState({
    userId: 1,
    courseId: 1,
  });

  // Ejemplo 1: Cargar datos automáticamente al montar el componente
  const {
    data: courses,
    loading: coursesLoading,
    error: coursesError,
    refetch: refetchCourses,
  } = useApiData(getAllCourses);

  // Ejemplo 2: Cargar datos con parámetros
  const {
    data: selectedCourse,
    loading: courseLoading,
    error: courseError,
    execute: fetchCourse,
  } = useApi(getCourseById);

  // Ejemplo 3: Búsqueda con debounce
  const {
    data: searchResults,
    loading: searchLoading,
    error: searchError,
    setSearch,
  } = useSearchApi(searchCourses, 500);

  // Ejemplo 4: Mutación (POST/PUT/DELETE)
  const {
    loading: enrollmentLoading,
    error: enrollmentError,
    success: enrollmentSuccess,
    execute: executeEnrollment,
  } = useApiMutation(enrollInCourse);

  // Ejemplo 5: Cargar proyectos
  const {
    data: projects,
    loading: projectsLoading,
    error: projectsError,
  } = useApiData(getAllProjects);

  // Ejemplo 6: Cargar mentorías
  const {
    data: mentorships,
    loading: mentorshipsLoading,
    error: mentorshipsError,
  } = useApiData(getAllMentorships);

  const handleCourseSelect = async (courseId) => {
    setSelectedCourseId(courseId);
    await fetchCourse(courseId);
  };

  const handleEnrollment = async () => {
    try {
      await executeEnrollment(enrollmentData.userId, enrollmentData.courseId);
      alert("Inscripción exitosa!");
    } catch (error) {
      console.error("Error en inscripción:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Ejemplos de Uso de API
      </h1>

      {/* Sección 1: Cursos */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📚 Cursos</h2>

        {coursesLoading && <p className="text-blue-600">Cargando cursos...</p>}
        {coursesError && <p className="text-red-600">Error: {coursesError}</p>}

        {courses && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCourseSelect(course.id)}>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {course.description?.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={refetchCourses}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Recargar Cursos
        </button>
      </div>

      {/* Sección 2: Curso Seleccionado */}
      {selectedCourseId && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🎯 Curso Seleccionado</h2>

          {courseLoading && <p className="text-blue-600">Cargando curso...</p>}
          {courseError && <p className="text-red-600">Error: {courseError}</p>}

          {selectedCourse && (
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">{selectedCourse.title}</h3>
              <p className="text-gray-600">
                Instructor: {selectedCourse.instructor}
              </p>
              <p className="mt-2">{selectedCourse.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Módulos:</h4>
                <ul className="list-disc list-inside">
                  {selectedCourse.modules?.map((module) => (
                    <li key={module.id} className="text-sm">
                      {module.title} - {module.status}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sección 3: Búsqueda */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🔍 Búsqueda de Cursos</h2>

        <input
          type="text"
          placeholder="Buscar cursos..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        />

        {searchLoading && <p className="text-blue-600">Buscando...</p>}
        {searchError && <p className="text-red-600">Error: {searchError}</p>}

        {searchResults && searchResults.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map((course) => (
              <div key={course.id} className="p-3 border rounded-lg">
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
              </div>
            ))}
          </div>
        )}

        {searchResults && searchResults.length === 0 && (
          <p className="text-gray-500">No se encontraron resultados</p>
        )}
      </div>

      {/* Sección 4: Inscripción */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📝 Inscripción a Curso</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">User ID:</label>
            <input
              type="number"
              value={enrollmentData.userId}
              onChange={(e) =>
                setEnrollmentData((prev) => ({
                  ...prev,
                  userId: parseInt(e.target.value),
                }))
              }
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Course ID:</label>
            <input
              type="number"
              value={enrollmentData.courseId}
              onChange={(e) =>
                setEnrollmentData((prev) => ({
                  ...prev,
                  courseId: parseInt(e.target.value),
                }))
              }
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            onClick={handleEnrollment}
            disabled={enrollmentLoading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50">
            {enrollmentLoading ? "Inscribiendo..." : "Inscribirse"}
          </button>

          {enrollmentError && (
            <p className="text-red-600">Error: {enrollmentError}</p>
          )}
          {enrollmentSuccess && (
            <p className="text-green-600">¡Inscripción exitosa!</p>
          )}
        </div>
      </div>

      {/* Sección 5: Proyectos */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🚀 Proyectos</h2>

        {projectsLoading && (
          <p className="text-blue-600">Cargando proyectos...</p>
        )}
        {projectsError && (
          <p className="text-red-600">Error: {projectsError}</p>
        )}

        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">
                  {project.description?.substring(0, 100)}...
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay proyectos disponibles</p>
        )}
      </div>

      {/* Sección 6: Mentorías */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">👨‍🏫 Mentorías</h2>

        {mentorshipsLoading && (
          <p className="text-blue-600">Cargando mentorías...</p>
        )}
        {mentorshipsError && (
          <p className="text-red-600">Error: {mentorshipsError}</p>
        )}

        {mentorships && mentorships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mentorships.slice(0, 4).map((mentorship) => (
              <div key={mentorship.id} className="p-4 border rounded-lg">
                <h3 className="font-semibold">
                  {mentorship.title || "Mentoría"}
                </h3>
                <p className="text-sm text-gray-600">
                  {mentorship.description?.substring(0, 100)}...
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  {mentorship.status || "Activa"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay mentorías disponibles</p>
        )}
      </div>

      {/* Información de uso */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">📖 Cómo usar estos hooks</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>useApiData:</strong> Para cargar datos automáticamente al
            montar el componente
          </p>
          <p>
            <strong>useApi:</strong> Para ejecutar peticiones manualmente con
            parámetros
          </p>
          <p>
            <strong>useSearchApi:</strong> Para búsquedas con debounce
            automático
          </p>
          <p>
            <strong>useApiMutation:</strong> Para operaciones POST/PUT/DELETE
          </p>
        </div>
      </div>
    </div>
  );
}
