import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function FeaturedCourse({ course }) {
  if (!course) {
    return null; // O un componente de carga/placeholder
  }

  // Usamos desestructuración con valores por defecto para evitar errores
  const {
    id,
    title = "Título no disponible",
    instructor = "Instructor no disponible",
    progress = 0,
    modules = [],
  } = course;

  // Encontramos la siguiente lección que no esté completada
  const nextLessonModule = modules.find((m) => m.status !== "completado");
  const nextLesson = nextLessonModule
    ? nextLessonModule.title
    : "¡Curso completado!";
  const lastAccess = "reciente"; // Dato simulado ya que no está en el JSON

  return (
    <div className="bg-[#1A202C] rounded-2xl p-6 text-white flex items-center justify-between shadow-lg">
      {/* Columna Izquierda - Título */}
      <div className="w-1/4">
        <h3 className="font-medium text-gray-400 text-lg">{title}</h3>
      </div>

      {/* Columna Derecha - Contenido Principal */}
      <div className="w-3/4 bg-[#2D3748] rounded-xl p-6 ml-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-400 mt-1">
              {instructor} • Último acceso {lastAccess}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-400 flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Siguiente: {nextLesson}
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2 my-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-gray-400">{progress}% Completado</p>
        </div>

        <div className="mt-4">
          <Link to={`/courses/${id}/content`}>
            <button className="flex items-center bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <Play className="w-5 h-5 mr-2" />
              Reanudar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
