import React from "react";
import { useOutletContext } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import CourseHeader from "@/components/Aprendiz/Curso/CourseHeader";
import ModuleList from "@/components/Aprendiz/Curso/ModuleList";

export default function CourseContentPage() {
  const { course } = useOutletContext(); // Obtenemos el curso del layout padre
  useDocumentTitle(course ? `Contenido: ${course.title}` : "Cargando curso...");

  if (!course) {
    return (
      <div className="text-center text-white p-8">
        Cargando contenido del curso...
      </div>
    );
  }

  return (
    <div className="w-full">
      <CourseHeader course={course} />
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-white mb-6">
          Contenido del Curso
        </h2>
        <ModuleList modules={course?.modules || []} />
      </div>
    </div>
  );
}
