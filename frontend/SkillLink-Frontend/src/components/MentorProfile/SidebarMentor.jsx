import React from "react";
import { Link, useLocation } from "react-router-dom";

import { BookOpen, House, Users, MessageCircle, CodeXml, User, Settings, Mail } from "lucide-react";
import "../../styles/SidebarMentor.css";


function SidebarMentor() {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Panel", icon: <House className="sidebar-icon" /> },
    {
      path: "/mis-estudiantes",
      label: "Mis Estudiantes",
      icon: <Users className="sidebar-icon" />,
    },
    {
      path: "/mis-mentorias",
      label: "Mis Mentorías",
      icon: <BookOpen className="sidebar-icon" />,
    },
    {
      path: "/buscar-estudiantes",
      label: "Buscar Estudiantes",
      icon: <Mail className="sidebar-icon" />,
    },
    {
      path: "/proyectos",
      label: "Proyectos",
      icon: <CodeXml className="sidebar-icon" />,
    },
    {
      path: "/chat-mentor",
      label: "Chat",
      icon: <MessageCircle className="sidebar-icon" />,
    },
    {
      path: "/perfil",
      label: "Perfiles",
      icon: <User className="sidebar-icon" />,
    },
    {
      path: "/configuracion",
      label: "Configuración",
      icon: <Settings className="sidebar-icon" />,
    },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map(({ path, label, icon }) => (
          <li key={path}>
            <Link
              to={path}
              className={location.pathname === path ? "active" : ""}>
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="user">👱🏻‍♀️ Maya Gutierrez</div>
    </div>
  );
}

export default SidebarMentor;
