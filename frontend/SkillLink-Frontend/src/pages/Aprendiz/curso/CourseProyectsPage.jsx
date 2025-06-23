import React from "react";
import { useParams } from "react-router-dom";

export default function CourseProyectsPage() {
  const { courseId } = useParams();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">
        Proyectos para el Curso {courseId}
      </h1>
      <p className="text-gray-600 mt-2">
        (Aquí se mostrará la lista de proyectos colaborativos para este curso
        específico.)
      </p>
    </div>
  );
}
