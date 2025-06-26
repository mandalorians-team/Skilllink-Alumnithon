import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "../pages/Aprendiz/courses/Courses";


import CourseContentPage from "../pages/Aprendiz/courses/CourseContentPage";
// Agrega aquí más páginas de cursos si tienes

export default function CursoRoutes() {
  return (
    <Routes>
      <Route path="/courses" element={<Courses/>} />
      <Route path="/all-courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseContentPage />} />
      <Route path="/courses/:id/content" element={<CourseContentPage />} />
    </Routes>
  );
}
