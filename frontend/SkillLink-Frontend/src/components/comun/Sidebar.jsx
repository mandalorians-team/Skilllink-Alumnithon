import React, { useState, useEffect } from "react";
import avatar from "@/assets/img/Avatar.png";
import { useLocation, Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

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
  LayoutDashboard,
  GraduationCap,
  BookCopy,
  CalendarDays,
} from "lucide-react";

// --- Definición de Links por Rol ---
// A futuro, esto podría venir de un archivo de configuración o ser filtrado según permisos.

const apprenticeLinks = [
  { path: "/dashboard", icon: Home, label: "Panel" },
  { path: "/mentores", icon: Users, label: "Mentores" },
  { path: "/courses", icon: BookOpen, label: "Mis Cursos" },
  { path: "/mentorias", icon: MessageCircle, label: "Mentorias" },
  { path: "/proyectos", icon: CodeXml, label: "Proyectos" },
  { path: "/chat", icon: MessageSquare, label: "Chat" },
  { path: "/perfil", icon: User, label: "Perfil" },
  { path: "/configuracion", icon: Settings, label: "Configuración" },
];

const mentorLinks = [
  { path: "/mentor/dashboard", icon: LayoutDashboard, label: "Panel" },
  { path: "/mentor/alumnos", icon: GraduationCap, label: "Mis Alumnos" },
  { path: "/mentor/cursos", icon: BookCopy, label: "Mis Cursos" },
  { path: "/mentor/agenda", icon: CalendarDays, label: "Agenda" },
  { path: "/mentor/chat", icon: MessageSquare, label: "Chat" },
  { path: "/mentor/perfil", icon: User, label: "Perfil" },
  { path: "/mentor/configuracion", icon: Settings, label: "Configuración" },
];

const adminLinks = [
  { path: "/admin/dashboard", icon: LayoutDashboard, label: "Panel" },
  { path: "/admin/usuarios", icon: Users, label: "Usuarios" },
  { path: "/admin/cursos", icon: BookCopy, label: "Cursos" },
  { path: "/admin/agenda", icon: CalendarDays, label: "Agenda" },
  { path: "/admin/perfil", icon: User, label: "Perfil" },
  { path: "/admin/chat", icon: MessageSquare, label: "Chat" },
];
// --- Componente NavLink reutilizable ---
const NavLink = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 transition-colors ${
      isActive
        ? "text-white bg-white/20 rounded-lg px-3 py-2"
        : "text-card-subtitle hover:text-white"
    }`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, role, isAuthenticated } = useAuth();

  // Decidir qué enlaces mostrar.
  const getLinksByRole = () => {
    if (!isAuthenticated) return [];
    switch (role) {
      case "mentor":
        return mentorLinks;
      case "admin":
        return adminLinks;
      case "aprendiz":
      default:
        return apprenticeLinks;
    }
  };
  const links = getLinksByRole();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

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
        className={`fixed h-screen w-64 bg-header text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}>
        <nav className="space-y-2 pt-2">
          <div className="space-y-2 pt-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                icon={link.icon}
                label={link.label}
                isActive={isActive(link.path)}
              />
            ))}
          </div>

          {isAuthenticated && user && (
            <div className="flex items-center justify-between h-full pt-20">
              <img
                src={user.imagen || avatar}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover"
              />

              <Link
                to="/perfil"
                className="flex items-center px-2 text-card-subtitle hover:text-white transition-colors">
                <div className="flex flex-col items-start">
                  <h1 className="text-white text-xs font-semibold">
                    {user.name}
                  </h1>
                  <span className="text-card-subtitle text-xs capitalize">
                    {role}
                  </span>
                </div>
                <ChevronRight />
              </Link>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
