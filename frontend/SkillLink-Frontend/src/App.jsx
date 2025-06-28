import React from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";

// Layouts y componentes comunes
import Header from "./components/comun/Header";
import Navbar from "./components/Main/Navbar";
import NavbarInterno from "./components/Main/NavbarInterno";
import Footer from "./components/Main/Footer";
import CurseTabs from "./components/Aprendiz/Curso/CourseTabs";

// Páginas públicas
import MainPage from "./pages/LandingPage/MainPage";
import Registro from "./pages/Register/OpcionesRegistro";
import FormularioRegistro from "./pages/Register/FormularioRegistro";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ChangePassword/ResetPassword";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

// Páginas de estudiante
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
<<<<<<< Updated upstream
import MentorProfilePage from "./pages/MentorProfile/MentorProfilePage";
import Error404 from "./pages/Error404/Error404";


=======

// Página nueva de cursos disponibles
import CursosDisponibles from "./pages/CursosDisponibles";

// Página de error
import Error404 from "./pages/Error404/Error404";

// Layout general
>>>>>>> Stashed changes
function Layout() {
  const location = useLocation();

  const showNavbar = /^(\/|\/registro|\/registro-basico|\/login|\/restablecer)$/.test(location.pathname);
  const showHeader = !showNavbar && /^\/(dashboard|courses|mentorias|proyectos|panel)(\/\d+)?$/.test(location.pathname);
  const showFooter = showHeader || showNavbar;
  const isCourseTabs = /^\/courses\/[^/]+(\/.*)?$/.test(location.pathname);

  // ✅ Ocultamos el sidebar (NavbarInterno) para rutas específicas como cursos-disponibles
  const hideNavbar = /^\/(perfil|panel|cursos-disponibles)$/.test(location.pathname);
  const hideHeader = /^\/(perfil|proyectos)$/.test(location.pathname);

  return (
    <div className="flex min-h-screen bg-page-background-color">
      {!hideNavbar && <NavbarInterno />}
      <div className={`flex-1 flex flex-col ${!hideNavbar ? "ml-60" : ""}`}>
        {!hideHeader && showHeader && <Header />}
        {isCourseTabs && <CurseTabs />}
        <main className="p-6 bg-blue-200 flex-grow">
          <Outlet />
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

// Rutas principales
export default function App() {
  return (
    <Routes>
      {/* Rutas públicas (sin Layout) */}
      <Route path="/" element={<MainPage />} />
      <Route path="/formularioregistro" element={<FormularioRegistro />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/restablecer" element={<ResetPassword />} />
      <Route path="/cambiar-password" element={<ChangePassword />} />
      <Route path="/navbar-interno" element={<NavbarInterno />} />

      {/* Rutas protegidas con Layout */}
      <Route element={<Layout />}>
        {/* Rutas para estudiantes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseLayoutPage />}>
          <Route path="content" element={<CourseContentPage />} />
          <Route path="course-mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
        
        </Route>
        <Route path="/mentorias" element={<MentoriasPage />} />
        <Route path="/proyectos" element={<ProyectsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/perfil" element={<PerfilEstudiante />} />
        <Route path="/panel" element={<PanelEstudiante />} />

<<<<<<< Updated upstream
        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="perfil" element={<PerfilEstudiante />} />
        <Route path="panel" element={<PanelEstudiante />} />
       {/* <Route path="mentor/profile" element={<MentorProfilePage />} /> */}
=======
        {/* ✅ Cursos disponibles sin sidebar */}
        <Route path="/cursos-disponibles" element={<CursosDisponibles />} />
>>>>>>> Stashed changes
      </Route>

      {/* Página no encontrada */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
