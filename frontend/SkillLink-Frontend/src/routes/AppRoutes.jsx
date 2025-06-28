import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
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
import DashboardPage from "@/pages/Aprendiz/DashboardPage";
import LoginPage from "@/pages/Login/LoginPage";

// Importar la nueva página de Mentor
import MentorDashboardPage from "@/pages/mentor/MentorDashboardPage";
import MisAlumnosPage from "@/pages/mentor/MisAlumnosPage";
import MisCursosPage from "@/pages/mentor/MisCursosPage";
import AgendaPage from "@/pages/mentor/AgendaPage";
import ChatPage from "@/pages/Chat/ChatPage";
import ConfiguracionPage from "@/pages/mentor/ConfiguracionPage";

// Importar desde Error404
import Error404 from "@/pages/Error404/Error404";

// Importar desde MentorProfile
import DashboardMentor from "@/pages/MentorProfile/DashboardMentor";
import MentorProfilePage from "@/pages/MentorProfile/MentorProfilePage";
import MentorPage from "@/pages/MentorProfile/MentorPage";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Error404 />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/chat" element={<ChatPage />} />

        {/* Ruta Layout para un curso específico */}
        <Route path="courses/:courseId" element={<CourseLayoutPage />}>
          {/* Rutas anidadas que se renderizarán dentro del Outlet de CourseLayoutPage */}
          <Route path="content" element={<CourseContentPage />} />
<<<<<<< Updated upstream
          <Route path="/mentor" element={<MentorPage />} /> {/* Esta página es Main Area de la Etapa 1 de Visily */}
          <Route path="course-mentorias" element={<CourseMentoriasPage />} />
=======
          <Route path="/mentor" element={<MentorPage />} />   {/* Esta página es Main Area de la Etapa 1 de Visily */}
         
          <Route path="course-mentorias" element={<CourseMentoriasPage />} />

>>>>>>> Stashed changes
          <Route path="proyectos" element={<CourseProyectsPage />} />
          <Route path="leccion/:lessonId" element={<LessonPage />} />
        </Route>

        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />

        {/* Rutas de Mentor */}
        <Route path="/mentor/profile" element={<MentorProfilePage />} />
        <Route path="/mentor/dashboard-mentor/" element={<DashboardMentor />} />
        <Route path="/mentor/mis-estudiantes" element={<MentorProfilePage />} />
        <Route path="mentor/alumnos" element={<MisAlumnosPage />} />
        <Route path="mentor/cursos" element={<MisCursosPage />} />
        <Route path="mentor/agenda" element={<AgendaPage />} />
        <Route path="mentor/chat" element={<ChatPage />} />
        <Route path="mentor/configuracion" element={<ConfiguracionPage />} />

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
