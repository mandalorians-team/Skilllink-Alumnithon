import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/Avatar.png";
import { useLocation } from "react-router-dom";

import {
  Home,
  Users,
  User,
  BookOpen,
  MessageCircle,
  Settings,
  ChevronRight,
  CodeXml,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para verificar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Botón hamburguesa para móviles */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-header text-white p-2 rounded-lg">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay para cerrar en móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed  h-screen w-64 bg-header text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}>
        <nav className="space-y-2 pt-2">
          <div className="space-y-2 pt-6">
            <Link
              to="/"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <Home className="w-5 h-5" />
              <span>Panel</span>
            </Link>

            <Link
              to="/mentores"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/mentores")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <Users className="w-5 h-5" />
              <span>Mentores</span>
            </Link>

            <Link
              to="/courses"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/courses")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <BookOpen className="w-5 h-5" />
              <span>Mis Cursos</span>
            </Link>

            <Link
              to="/mentorias"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/mentorias")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <MessageCircle className="w-5 h-5" />
              <span>Mentorias</span>
            </Link>

            <Link
              to="/proyectos"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/proyectos")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <CodeXml className="w-5 h-5" />
              <span>Proyectos</span>
            </Link>

            <Link
              to="/chat"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/chat")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <MessageSquare className="w-5 h-5" />
              <span>Chat</span>
            </Link>

            <Link
              to="/perfil"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/perfil")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </Link>

            <Link
              to="/configuracion"
              className={`flex items-center space-x-3 transition-colors ${
                isActive("/configuracion")
                  ? "text-white bg-white/20 rounded-lg px-3 py-2"
                  : "text-card-subtitle hover:text-white"
              }`}>
              <Settings className="w-5 h-5" />
              <span>Configuración</span>
            </Link>
          </div>

          <div className="flex items-center justify-between  h-full pt-20">
            <img src={avatar} alt="logo" className="w-10 h-10 rounded-full" />

            <Link
              to="/perfil"
              className="flex items-center px-2 text-card-subtitle hover:text-white transition-colors">
              <h1 className="text-white text-xs font-semibold">
                Maria Fernanda
              </h1>

              <span className="text-card-subtitle text-xs">
                Aprendiz
              </span>
              <ChevronRight />
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
