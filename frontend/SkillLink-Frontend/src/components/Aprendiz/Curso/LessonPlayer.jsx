import React from "react";
import { PlayCircle, Award, Download } from "lucide-react";

export default function LessonPlayer({ course }) {
  if (!course) return null;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl text-white p-6">
      {/* Video Player Placeholder */}
      <div className="bg-black aspect-video w-full rounded-md mb-6 flex items-center justify-center border border-gray-700">
        <div className="text-center">
          <h3 className="text-gray-400 text-lg">{course.title}</h3>
          <iframe
            src={`https://www.youtube.com/embed/${course.video}`} 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Course Info */}
      <h1 className="text-4xl font-bold mb-3">{course.title}</h1>

      {/* Progress Bar */}
      <div className="mb-6">
        <span className="text-sm font-semibold text-gray-300">
          Progreso del Estudiante: {course.progress}%
        </span>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${course.progress}%` }}></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
          <PlayCircle size={20} />
          Ver Contenido
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
          <Award size={20} />
          Iniciar Quiz
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
          <Download size={20} />
          Descargar Recursos
        </button>
      </div>
    </div>
  );
}
