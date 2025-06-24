import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/comun/Header";
import Footer from "./components/comun/Footer";
import Sidebar from "./components/comun/Sidebar";
import { useLocation } from "react-router-dom";
import CurseTabs from "./components/Aprendiz/Curso/CourseTabs";
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
import ProyectsPage from "./pages/Aprendiz/proyectos/ProyectsPage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import PerfilEstudiante from "./pages/Aprendiz/PerfilEstudiante";
import PanelEstudiante from "./pages/Aprendiz/PanelEstudiante";

/**
 * El Layout principal de la aplicación.
 * Contiene los elementos persistentes como el Sidebar y el Header.
 * El componente <Outlet> renderizará el componente de la ruta actual.
 */
export function Layout() {
  const location = useLocation();

  const showHeader = /^\/(dashboard|courses|mentorias|proyectos)(\/\d+)?$/.test(
    location.pathname
  );
  const showFooter = showHeader;
  const isCourseTabs = /^\/courses\/[^/]+(\/.*)?$/.test(location.pathname);

  const hideSidebar =
    /^(\/login|\/registro|\/registro-basico|\/restablecer|\/cambiar-password|\/)$/.test(
      location.pathname
    );

  return (
    <div className="flex bg-page-background-color min-h-screen">
      {!hideSidebar && <Sidebar />}
      <div className={`flex-1 flex flex-col ${!hideSidebar ? "ml-64" : ""}`}>
        {showHeader && <Header />}
        {isCourseTabs && <CurseTabs />}
        <main className="p-6 bg-blue-200 flex-grow">
          <Outlet />
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Login / Registro */}
        <Route index element={<MainPage />} />
        <Route path="registro-basico" element={<Registro />} />
        <Route path="registro" element={<FormularioRegistro />} />
        <Route path="login" element={<Login />} />
        <Route path="restablecer" element={<ResetPassword />} />
        <Route path="cambiar-password" element={<ChangePassword />} />

        {/* Cursos y sus subrutas */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<CourseLayoutPage />}>
          <Route path="content" element={<CourseContentPage />} />
          <Route path="course-mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
        </Route>

        {/*Mentor y sus subrutas*/}
        <Route path="mentor" element={<MentorRoutes />}>
          <Route path="dashboard" element={<MentorDashboardPage />} />
          <Route path="agenda" element={<AgendaPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="cursos" element={<MisCursosPage />} />
          <Route path="configuracion" element={<ConfiguracionPage />} />
          <Route path="alumnos" element={<MisAlumnosPage />} />
        </Route>

        {/*Proyectos y sus subrutas*/}
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="perfilestudiante" element={<PerfilEstudiante />} />
        <Route path="panelestudiante" element={<PanelEstudiante />} />

        {/* 404 */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Route>
    </Routes>
  );
}
