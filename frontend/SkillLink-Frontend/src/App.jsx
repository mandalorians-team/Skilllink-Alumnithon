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
import AppRoutes from "./routes/AppRoutes";

/**
 * El Layout principal de la aplicación.
 * Contiene los elementos persistentes como el Sidebar y el Header.
 * El componente <Outlet> renderizará el componente de la ruta actual.
 */
function Layout() {
  const location = useLocation();


  const showHeader = /^\/(courses|mentorias|proyectos)(\/\d+)?$/.test(
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
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<CourseLayoutPage />}>
          <Route path="content" element={<CourseContentPage />} />
          <Route path="mentorias" element={<CourseMentoriasPage />} />
          <Route path="proyectos" element={<CourseProyectsPage />} />
        </Route>

        {/* Otras secciones */}
        <Route path="mentorias" element={<MentoriasPage />} />
        <Route path="proyectos" element={<ProyectsPage />} />
        <Route path="search" element={<SearchPage />} />

        {/* 404 */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Route>
    </Routes>
  );
}
