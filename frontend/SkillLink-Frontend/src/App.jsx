import React from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";

import Header from "./components/comun/Header";
import Footer from "./components/comun/Footer";
import Sidebar from "./components/comun/Sidebar";
import CurseTabs from "./components/Aprendiz/Curso/CourseTabs";
import AppRoutes from "./routes/AppRoutes";
import MainPage from "./pages/Login/MainPage";
import Registro from "./pages/Login/Registro";
import FormularioRegistro from "./pages/Login/FormularioRegistro";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/Login/ResetPassword";
import ChangePassword from "./pages/Login/ChangePassword";
import Courses from "./pages/Aprendiz/curso/Courses";
import CourseLayoutPage from "./pages/Aprendiz/curso/CourseLayoutPage";
import CourseContentPage from "./pages/Aprendiz/curso/CourseContentPage";
import CourseMentoriasPage from "./pages/Aprendiz/curso/CourseMentoriasPage";
import CourseProyectsPage from "./pages/Aprendiz/curso/CourseProyectsPage";
import MentoriasPage from "./pages/Aprendiz/mentorias/MentoriasPage";
import ProyectsPage from "./pages/Aprendiz/proyectos/ProyectsPage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/Aprendiz/DashboardPage";
import PerfilEstudiante from "./pages/Aprendiz/PerfilEstudiante";
import PanelEstudiante from "./pages/Aprendiz/PanelEstudiante";
import MentorRoutes from "./routes/MentorRoutes";
import MentorDashboardPage from "./pages/mentor/MentorDashboardPage";
import AgendaPage from "./pages/mentor/AgendaPage";
import ChatPage from "./pages/mentor/ChatPage";
import MisCursosPage from "./pages/mentor/MisCursosPage";
import ConfiguracionPage from "./pages/mentor/ConfiguracionPage";
import MisAlumnosPage from "./pages/mentor/MisAlumnosPage";

import TestCertificacion from "./components/TestCertificacion";

function Layout() {
  const location = useLocation();

  const showHeader = /^\/(dashboard|courses|mentorias|proyectos|perfil|panel)(\/\d+)?$/.test(
    location.pathname
  );
  const showFooter = showHeader;
  const isCourseTabs = /^\/courses\/[^/]+(\/.*)?$/.test(location.pathname);

  const hideSidebar =
    /^(\/login|\/registro|\/registro-basico|\/restablecer|\/cambiar-password|\/panelestudiante|\/perfilestudiante|\/)$/.test(
      location.pathname
    );

  return (
    <div className="flex min-h-screen bg-page-background-color">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        {showHeaderFooter && <Header />}
        {isCourseTabs && <CurseTabs />}
        <main className="p-6 bg-blue-200 flex-grow">
          <Outlet />
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Rutas sin Layout */}
      <Route path="/" element={<MainPage />} />
      <Route path="/registro-basico" element={<Registro />} />
      <Route path="/registro" element={<FormularioRegistro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/restablecer" element={<ResetPassword />} />
      <Route path="/cambiar-password" element={<ChangePassword />} />
      <Route path="/test-cert" element={<TestCertificacion />} />

      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseLayoutPage />}>
          <Route path="content" element={<CourseContentPage />} />
          <Route path="course-mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
        </Route>

        {/* Otras secciones */}
        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="perfil" element={<PerfilEstudiante />} />
        <Route path="panel" element={<PanelEstudiante />} /> 

      {/* 404 */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
}
