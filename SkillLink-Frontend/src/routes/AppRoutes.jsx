import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../App";
import Courses from "../pages/Aprendiz/curso/Courses";
import CourseLayoutPage from "../pages/Aprendiz/curso/CourseLayoutPage";
import CourseContentPage from "../pages/Aprendiz/curso/CourseContentPage";
import CourseMentoriasPage from "../pages/Aprendiz/curso/CourseMentoriasPage";
import CourseProyectsPage from "../pages/Aprendiz/curso/CourseProyectsPage";
import LessonPage from "../pages/Aprendiz/curso/LessonPage";
import MentoriasPage from "../pages/Aprendiz/mentorias/MentoriasPage";
import ProyectsPage from "../pages/Aprendiz/proyectos/ProyectsPage";
import SearchPage from "../pages/SearchPage";
import DashboardPage from "@/pages/DashboardPage";

// Páginas de mentor_Alejo
import MentorDashboardPage from "@/pages/mentor_Alejo/DashboardPage";
import MisAlumnosPage from "@/pages/mentor_Alejo/MisAlumnosPage";
import MisCursosPage from "@/pages/mentor_Alejo/MisCursosPage";
import AgendaPage from "@/pages/mentor_Alejo/AgendaPage";
import ChatPage from "@/pages/mentor_Alejo/ChatPage";
import ConfiguracionPage from "@/pages/mentor_Alejo/ConfiguracionPage";

// Nuevas rutas de Aleja
import MentorPage from "../pages/Mentor/MentorPage";
import MentorProfilePage from "../pages/Mentor/MentorProfilePage";
import Error404 from "../pages/Error404/Error404";
import ChatPageStandalone from "../pages/Chat/ChatPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="courses" element={<Courses />} />

        <Route path="courses/:courseId" element={<CourseLayoutPage />}>
          <Route path="content" element={<CourseContentPage />} />
          <Route path="mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
          <Route path="leccion/:lessonId" element={<LessonPage />} />
        </Route>

        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />

        {/* Rutas de mentor_Alejo */}
        <Route path="mentor/dashboard" element={<MentorDashboardPage />} />
        <Route path="mentor/alumnos" element={<MisAlumnosPage />} />
        <Route path="mentor/cursos" element={<MisCursosPage />} />
        <Route path="mentor/agenda" element={<AgendaPage />} />
        <Route path="mentor/chat" element={<ChatPage />} />
        <Route path="mentor/configuracion" element={<ConfiguracionPage />} />

        {/* Rutas añadidas desde el segundo archivo */}
        <Route path="mentor" element={<MentorPage />} />
        <Route path="mentor/profile" element={<MentorProfilePage />} />
        <Route path="chat" element={<ChatPageStandalone />} />

        {/* Página 404 */}
        <Route
          path="*"
          element={
            <div className="text-black font-bold text-center mt-10  text-3xl">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-black">
                  Página no encontrada
                </h1>
                <p className="text-black font-orbitron font-bold text-2xl">
                  La página que estás buscando no existe.
                </p>
              </div>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
