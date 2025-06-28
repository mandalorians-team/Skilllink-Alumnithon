import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "@/context/AuthContext";
import { Layout } from "../App";

// Aprendiz
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

// Login
import LoginPage from "@/pages/Login/LoginPage";

// Chat (compartido)
import ChatPage from "@/pages/Chat/ChatPage";

// Mentor sección moderna
import DashboardMentor from "@/pages/MentorProfile/DashboardMentor";
import MentorProfilePage from "@/pages/MentorProfile/MentorProfilePage";
import MentorPage from "@/pages/MentorProfile/MentorPage";
import MentorSearchSection from "@/components/MentorProfile/MentorSearchSection";

// Mentor legacy
import MentorDashboardPage from "@/pages/mentor/MentorDashboardPage";
import MisAlumnosPage from "@/pages/mentor/MisAlumnosPage";
import MisCursosPage from "@/pages/mentor/MisCursosPage";
import AgendaPage from "@/pages/mentor/AgendaPage";
import ConfiguracionPage from "@/pages/mentor/ConfiguracionPage";

// Error 404
import Error404 from "@/pages/Error404/Error404";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          // <ProtectedRoute>
          <Layout />
          // </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />

        {/* Rutas del aprendiz */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />

        {/* Curso específico */}
        <Route path="courses/:courseId" element={<CourseLayoutPage />}>
          <Route path="content" element={<CourseContentPage />} />
          <Route path="mentor" element={<MentorPage />} />
          <Route path="course-mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
          <Route path="leccion/:lessonId" element={<LessonPage />} />
        </Route>

        {/* Ruta para mentor con subrutas agrupadas */}
        <Route path="mentor">
          <Route index element={<MentorSearchSection />} />
          <Route path="profile" element={<MentorProfilePage />} />
          <Route path="dashboard-mentor" element={<DashboardMentor />} />
          <Route path="mis-estudiantes" element={<MentorProfilePage />} />
          <Route path="alumnos" element={<MisAlumnosPage />} />
          <Route path="cursos" element={<MisCursosPage />} />
          <Route path="agenda" element={<AgendaPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="configuracion" element={<ConfiguracionPage />} />
        </Route>

        {/* Error 404 para rutas no existentes */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
