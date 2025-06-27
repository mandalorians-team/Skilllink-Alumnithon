
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/SidebarMentor.css';


// Importar SVGs como URLs
import houseIcon from "../../assets/icons/house.svg";
import usersIcon from "../../assets/icons/users.svg";
import bookIcon from "../../assets/icons/book-open.svg";
import mentorIcon from "../../assets/icons/message.svg";
import projectIcon from "../../assets/icons/code-xml.svg";
import chatIcon from "../../assets/icons/chat.svg";
import userIcon from "../../assets/icons/user.svg";
import settingsIcon from "../../assets/icons/settings.svg";

// Componentes de iconos simples
const HouseIcon = () => (
  <img src={houseIcon} alt="House" className="sidebar-icon" />
);
const UsersIcon = () => (
  <img src={usersIcon} alt="Users" className="sidebar-icon" />
);
const BookIcon = () => (
  <img src={bookIcon} alt="Book" className="sidebar-icon" />
);
const MentorIcon = () => (
  <img src={mentorIcon} alt="Mentor" className="sidebar-icon" />
);
const ProjectIcon = () => (
  <img src={projectIcon} alt="Project" className="sidebar-icon" />
);
const ChatIcon = () => (
  <img src={chatIcon} alt="Chat" className="sidebar-icon" />
);
const UserIcon = () => (
  <img src={userIcon} alt="User" className="sidebar-icon" />
);
const SettingsIcon = () => (
  <img src={settingsIcon} alt="Settings" className="sidebar-icon" />
);

function SidebarMentor() {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Panel", icon: <HouseIcon /> },
    {
      path: "/mis-estudiantes",
      label: "Mis Estudiantes",
      icon: <UsersIcon />,
    },
    {
      path: "/mis-mentorias",
      label: "Mis Mentorías",
      icon: <BookIcon />,
    },
    {
      path: "/buscar-estudiantes",
      label: "Buscar Estudiantes",
      icon: <MentorIcon />,
    },
    {
      path: "/proyectos",
      label: "Proyectos",
      icon: <ProjectIcon />,
    },
    {
      path: "/chat",
      label: "Chat",
      icon: <ChatIcon />,
    },
    {
      path: "/perfil",
      label: "Perfiles",
      icon: <UserIcon />,
    },
    {
      path: "/configuracion",
      label: "Configuración",
      icon: <SettingsIcon />,
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
      <div className="user"></div>
    </div>
  );
}

export default SidebarMentor;
