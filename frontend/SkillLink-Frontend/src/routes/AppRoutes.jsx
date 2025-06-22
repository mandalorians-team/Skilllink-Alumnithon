import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../App";
import Courses from "../pages/curso/Courses";
import CourseLayoutPage from "../pages/curso/CourseLayoutPage";
import CourseContentPage from "../pages/curso/CourseContentPage";
import CourseMentoriasPage from "../pages/curso/CourseMentoriasPage";
import CourseProyectsPage from "../pages/curso/CourseProyectsPage";
import MentoriasPage from "../pages/mentorias/MentoriasPage";
import ProyectsPage from "../pages/proyectos/ProyectsPage";
import SearchPage from "../pages/SearchPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Courses />} />
        <Route path="courses" element={<Courses />} />

        {/* Ruta Layout para un curso específico */}
        <Route path="courses/:courseId" element={<CourseLayoutPage />}>
          {/* Rutas anidadas que se renderizarán dentro del Outlet de CourseLayoutPage */}
          <Route path="content" element={<CourseContentPage />} />
          <Route path="mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
        </Route>

        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Route>
    </Routes>
  );
}
