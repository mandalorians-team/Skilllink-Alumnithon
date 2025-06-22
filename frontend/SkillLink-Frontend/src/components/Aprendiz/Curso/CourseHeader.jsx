import React from "react";
import { PlayCircle, Award, Download } from "lucide-react";
import { Link } from "react-router-dom";
import LessonPlayer from "./LessonPlayer";

export default function CourseHeader({ course, onShowContent }) {
  if (!course) return null;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-white">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-300 mb-4">{course.description}</p>

        {/* Barra de Progreso */}
        <div>
          <span className="text-sm font-semibold">
            Progreso del Estudiante: {course.progress}%
          </span>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}></div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={onShowContent}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <PlayCircle size={20} />
            <Link to={`/courses/${course.id}/content`}>
              {" "}
              Ver Contenido
            </Link>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <Award size={20} />
            Iniciar Quiz
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <Download size={20} />
            Descargar Recursos
          </button>
        </div>
      </div>
    </div>
  );
}
