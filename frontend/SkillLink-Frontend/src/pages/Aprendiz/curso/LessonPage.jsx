import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function LessonPage() {
  const { lessonId } = useParams();
  const { course } = useOutletContext(); // Obtenemos el curso del layout

  if (!course) {
    return <div className="text-center p-8 text-white">Cargando curso...</div>;
  }

  // Encontrar la lección/módulo específico
  const lesson = course.modules?.find((m) => m.id.toString() === lessonId);

  if (!lesson) {
    return (
      <div className="text-center p-8 text-red-500">Lección no encontrada.</div>
    );
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="mb-6">
        {lesson.description || "Esta lección no tiene descripción."}
      </p>

      {/* Aquí podrías incrustar un reproductor de video */}
      <div className="aspect-video bg-black rounded-md mb-6 flex items-center justify-center">
        <p className="text-gray-400">Aquí va el video de la lección</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Recursos</h2>
        <p className="text-gray-400">
          No hay recursos disponibles para esta lección.
        </p>
      </div>
    </div>
  );
}
