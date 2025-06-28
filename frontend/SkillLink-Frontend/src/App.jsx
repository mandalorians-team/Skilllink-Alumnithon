import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

// Layouts y componentes comunes
import Header from "./components/comun/Header";
import NavbarInterno from "./components/Main/NavbarInterno";
import Footer from "./components/Main/Footer";
import CurseTabs from "./components/Aprendiz/Curso/CourseTabs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import RutaProtegidaMentor from "./components/comun/RutaProtegidaMentor";
// import RutaProtegidaLearner from "./components/comun/RutaProtegidaLearner";

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


// Páginas nuevas
import CursosDisponibles from "./pages/CursosDisponibles";
import MentoresDisponibles from "./pages/MentoresDisponibles";
import CursoDetalleDisponible from "./pages/CursoDetalleDisponible";

// Página de error
import Error404 from "./pages/Error404/Error404";

// Páginas de MentorProfile
import DashboardMentor from "./pages/MentorProfile/DashboardMentor";
import MentorProfilePage from "./pages/MentorProfile/MentorProfilePage";
import MisEstudiantes from "./pages/MentorProfile/MisEstudiantes";
import MentorPage from "./pages/MentorProfile/MentorPage";

<<<<<<< HEAD
=======




>>>>>>> 4a10caf35abd715ed311790f9a58e81d123d4d65
function Layout() {
  const location = useLocation();

  const showNavbar =
    /^(\/|\/registro|\/registro-basico|\/login|\/restablecer)$/.test(
      location.pathname
    );
  const showHeader =
    !showNavbar &&
    /^\/(dashboard|courses|mentorias|proyectos|panel)(\/\d+)?$/.test(
      location.pathname
    );
  const showFooter = showHeader || showNavbar;
  const isCourseTabs = /^\/courses\/[^/]+(\/.*)?$/.test(location.pathname);

  // Ocultamos el sidebar y header en la ruta de proyectos
  const isProyectsPage = location.pathname.startsWith("/proyectos");
  const isCoursesPage = location.pathname.startsWith("/courses");
  const isMentoriasPage = location.pathname.startsWith("/mentorias");
  const hideNavbar =
    /^\/(perfil|panel|cursos-disponibles|mentores-disponibles)$/.test(
      location.pathname
    ) ||
    isProyectsPage ||
    isCoursesPage ||
    isMentoriasPage;
  const hideHeader =
    /^\/(perfil|proyectos|courses)$/.test(location.pathname) ||
    isProyectsPage ||
    isCoursesPage ||
    isMentoriasPage;

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

export default function App() {
  return (
    <>
    <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar={false} newestOnTop />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<MainPage />} />
        <Route path="/formularioregistro" element={<FormularioRegistro />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restablecer" element={<ResetPassword />} />
        <Route path="/cambiar-password" element={<ChangePassword />} />
        <Route
          path="/cursos-disponibles/:id"
          element={<CursoDetalleDisponible />}
        />
        {/* Rutas MentorProfile */}
        <Route
          path="/mentor/dashboard"
          element={
            // <RutaProtegidaMentor>
            <DashboardMentor />
            // </RutaProtegidaMentor>
          }
        />
        <Route
          path="/mentor/perfil"
          element={
            // <RutaProtegidaMentor>
            <MentorProfilePage />
            // </RutaProtegidaMentor>
          }
        />
        <Route
          path="/mentor/mis-estudiantes"
          element={
            // <RutaProtegidaMentor>
            <MisEstudiantes />
            // </RutaProtegidaMentor>
          }
        />
        <Route
          path="/mentor"
          element={
            // <RutaProtegidaMentor>
            <MentorPage />
            // </RutaProtegidaMentor>
          }
        />
        {/* Rutas con Layout */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              // <RutaProtegidaLearner>
              <DashboardPage />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/courses"
            element={
              // <RutaProtegidaLearner>
              <Courses />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              // <RutaProtegidaLearner>
              <CourseLayoutPage />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/mentorias"
            element={
              // <RutaProtegidaLearner>
              <MentoriasPage />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/proyectos"
            element={
              // <RutaProtegidaLearner>
              <ProyectsPage />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/search"
            element={
              // <RutaProtegidaLearner>
              <SearchPage />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/perfil"
            element={
              // <RutaProtegidaLearner>
              <PerfilEstudiante />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/panel"
            element={
              // <RutaProtegidaLearner>
              <PanelEstudiante />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/cursos-disponibles"
            element={
              // <RutaProtegidaLearner>
              <CursosDisponibles />
              // </RutaProtegidaLearner>
            }
          />
          <Route
            path="/mentores-disponibles"
            element={
              // <RutaProtegidaLearner>
              <MentoresDisponibles />
              // </RutaProtegidaLearner>
            }
          />
        </Route>
        {/* Ruta 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
