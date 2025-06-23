import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getCourseById } from "@/services/BackendServices";

export default function CourseLayoutPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const data = await getCourseById(courseId);
        setCourse(data);
      } catch (err) {
        setError("No se pudo cargar la información del curso.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div className="text-center p-8 text-white">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-8">
        <Outlet context={{ course }} />
      </div>
    </div>
  );
}
