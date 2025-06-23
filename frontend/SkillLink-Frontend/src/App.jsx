import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Header from "./components/comun/Header";
import Footer from "./components/comun/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import CurseTabs from "./components/Curso/CourseTabs";

import MainPage from "./pages/Login/MainPage";
import Registro from "./pages/Login/Registro";
import Login from "./pages/Login/Login";
import FormularioRegistro from "./pages/Login/FormularioRegistro";
import ResetPassword from "./pages/Login/ResetPassword";
import ChangePassword from "./pages/Login/ChangePassword";

import Courses from "./pages/curso/Courses";
import CourseLayoutPage from "./pages/curso/CourseLayoutPage";
import CourseContentPage from "./pages/curso/CourseContentPage";
import CourseMentoriasPage from "./pages/curso/CourseMentoriasPage";
import CourseProyectsPage from "./pages/curso/CourseProyectsPage";
import MentoriasPage from "./pages/mentorias/MentoriasPage";
import ProyectsPage from "./pages/proyectos/ProyectsPage";
import SearchPage from "./pages/SearchPage";

function Layout() {
  const location = useLocation();

  const showHeader = /^\/(courses|mentorias|proyectos)(\/\d+)?$/.test(location.pathname);
  const showFooter = showHeader;
  const isCourseTabs = /^\/courses\/[^/]+(\/.*)?$/.test(location.pathname);

  const hideSidebar = /^(\/login|\/registro|\/registro-basico|\/restablecer|\/cambiar-password|\/)$/.test(location.pathname);

  return (
    <div className="flex min-h-screen">
      {!hideSidebar && <Sidebar />}
      <div className={`flex-1 flex flex-col ${!hideSidebar ? 'ml-64' : ''}`}>
        {showHeader && <Header />}
        {isCourseTabs && <CurseTabs />}
        <main className={`${!hideSidebar ? 'p-6' : ''}`}>
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
