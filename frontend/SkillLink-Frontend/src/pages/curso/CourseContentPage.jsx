import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/BackendServices";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import LessonPlayer from "../../components/Curso/LessonPlayer";
import ModuleList from "../../components/Curso/ModuleList"; // Este lo rediseñaremos después
import CourseHeader from "../../components/Curso/CourseHeader";

export default function CourseContentPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  useDocumentTitle(course ? `Lección: ${course.title}` : "Cargando curso...");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await getCourseById(courseId);
        setCourse(courseData);
      } catch (error) {
        console.error("Failed to fetch course data:", error);
        // Aquí podrías manejar el estado de error, por ejemplo, mostrando un mensaje al usuario
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) {
    return (
      <div className="text-center text-white p-8">
        Cargando contenido del curso...
      </div>
    );
  }

  return (
    <div className="w-full">
    

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-white mb-6">
          Contenido del Curso
        </h2>
        {/* ModuleList será rediseñado en el siguiente paso para encajar aquí */}
        <ModuleList modules={course.modules} />
      </div>
    </div>
  );
}
