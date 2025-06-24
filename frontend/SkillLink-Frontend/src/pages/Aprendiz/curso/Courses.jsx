import React, { useState, useEffect } from "react";
import CourseCard from "@/components/Aprendiz/Curso/CourseCard";
import FilterTabs from "@/components/comun/FilterTabs";
import Pagination from "@/components/comun/Pagination";
import FeaturedCourse from "@/components/Aprendiz/Curso/FeaturedCourse";
import { Sparkles } from "lucide-react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { getAllCourses } from "@/services/BackendServices";
import SearchBar from "@/components/comun/SearchBar";

const availableCourses = [
  {
    id: 10,
    title: "",
    instructor: "",
    description: "",
    rating: 4.9,
    image: "/src/assets/img/curso-js.png",
  },
  {
    id: 11,
    title: "Marketing Digital desde Cero",
    instructor: "Luis Marketing",
    description: "Lanza tu carrera en el marketing digital.",
    rating: 4.7,
    image: "/src/assets/img/curso-js.png",
  },
  {
    id: 12,
    title: "Fotografía para Redes Sociales",
    instructor: "Maria Camara",
    description: "Captura fotos increíbles con tu celular.",
    rating: 4.8,
    image: "/src/assets/img/curso-js.png",
  },
];

const filters = [
  "Cursos",
  "en progreso",
  "completados",
  "sin iniciar",
  "Desarrollo",
  "Diseño",
];

const ITEMS_PER_PAGE = 6; // Cantidad de cursos por página

export default function Courses() {
  useDocumentTitle("Cursos");
  const [courses, setCourses] = useState([]);
  const [featuredCourse, setFeaturedCourse] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Cursos");
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [isLoading, setIsLoading] = useState(false); // Estado de carga

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const data = await getAllCourses();
        setCourses(data);
        if (data.length > 0) {
          // Destacar el primer curso que esté "en progreso" o el primero de la lista
          const inProgressCourse = data.find((c) => c.status === "en progreso");
          setFeaturedCourse(inProgressCourse || data[0]);
        }
      } catch (error) {
        console.error("Error al cargar los cursos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Resetear a la primera página al cambiar de filtro
  };

  const handleEnroll = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, status: "en progreso" } : course
      )
    );
    // Si el curso inscrito debe ser destacado
    setFeaturedCourse((prev) => {
      if (!prev || prev.id !== courseId) return prev;
      return { ...prev, status: "en progreso" };
    });
  };

  const filteredCourses = courses.filter((course) => {
    // No mostrar el curso destacado en la lista principal
    if (featuredCourse && course.id === featuredCourse.id) {
      return false;
    }
    const currentFilter = activeFilter === "Cursos" ? "Todos" : activeFilter;
    if (currentFilter === "Todos") return true;
    return course.status === currentFilter.toLowerCase();
  });

  // --- Lógica de Paginación ---
  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  // Obtener solo los cursos para la página actual
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 6) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setIsLoading(true); // Activar el estado de carga
      setTimeout(() => {
        setCurrentPage(page);
        setIsLoading(false); // Desactivar después de un breve retraso
      }, 300); // 300 milisegundos de retraso
    }
  };

  if (isLoading && courses.length === 0) {
    return <div className="text-center p-8">Cargando cursos...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-header">Mis Cursos</h1>
        <button className="bg-palette-steel-blue text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
          <Sparkles className="h-5 w-5" />
          Explorar nuevos cursos
        </button>
      </div>
      {featuredCourse && (
        <div className="mb-8">
          <FeaturedCourse course={featuredCourse} />
        </div>
      )}

      <FilterTabs
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 min-h-[500px]">
        {isLoading ? (
          <div className="col-span-3 text-center py-10">
            <p className="text-gray-500">Cargando cursos...</p>
          </div>
        ) : (
          paginatedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              type="enrolled"
              onEnroll={handleEnroll}
            />
          ))
        )}
      </div>

      <div className="my-12">
        <h2 className="text-3xl font-bold text-header mb-6">
          Explora Nuevos Cursos y Mentorías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {availableCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              type="available"
              onEnroll={handleEnroll}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={availableCourses.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
    </div>
  );
}
