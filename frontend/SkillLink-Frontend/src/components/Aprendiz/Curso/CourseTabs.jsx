import React from "react";
import { NavLink, useParams } from "react-router-dom";

/**
 * Componente que muestra las pestañas de navegación dentro de una página de curso.
 * Utiliza NavLink para resaltar la pestaña activa.
 */
export default function CourseTabs() {
  const { courseId } = useParams(); // Obtenemos el ID del curso de la URL

  // Estilos base para los enlaces de las pestañas
  const baseLinkClasses = "py-2 px-4 font-medium transition-colors";
  // Estilos para la pestaña activa
  const activeLinkClasses = "border-b-2 border-blue-500 text-blue-500";
  // Estilos para las pestañas inactivas
  const inactiveLinkClasses = "text-gray-500 hover:text-gray-700";

  return (
    <div className="border-b border-gray-200 bg-header">
      <nav className="flex space-x-4">
        <NavLink
          to={`/courses/${courseId}/content`}
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }>
          Contenido del Curso
        </NavLink>
        <NavLink
          to={`/courses/${courseId}/mentorias`}
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }>
          Mentorías
        </NavLink>
        <NavLink
          to={`/courses/${courseId}/proyectos`}
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }>
          Proyectos Colaborativos
        </NavLink>
      </nav>
    </div>
  );
}
