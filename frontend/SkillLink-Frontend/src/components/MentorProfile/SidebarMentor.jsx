<<<<<<< Updated upstream
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// Importar SVGs como URLs
import houseIcon from "../../assets/icons/house.svg";
import usersIcon from "../../assets/icons/users.svg";
import bookIcon from "../../assets/icons/book-open.svg";
import mentorIcon from "../../assets/icons/message.svg";
import projectIcon from "../../assets/icons/code-xml.svg";
import chatIcon from "../../assets/icons/chat.svg";
import userIcon from "../../assets/icons/user.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import "../../styles/SidebarMentor.css";
||||||| Stash base
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Sidebar.css';
=======
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Sidebar.css";
>>>>>>> Stashed changes

<<<<<<< Updated upstream
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
||||||| Stash base
import { ReactComponent as HouseIcon } from '../../assets/icons/house.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg';
import { ReactComponent as BookIcon } from '../../assets/icons/book-open.svg';
import { ReactComponent as MentorIcon } from '../../assets/icons/message.svg';
import { ReactComponent as ProjectIcon } from '../../assets/icons/code-xml.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
=======
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
>>>>>>> Stashed changes

function SidebarMentor() {
  const location = useLocation();

<<<<<<< Updated upstream
  const menuItems = [
    { path: "/mentor/dashboard", label: "Panel", icon: <HouseIcon /> },
    {
      path: "/mentor/mis-estudiantes",
      label: "Mis Estudiantes",
      icon: <UsersIcon />,
    },
    {
      path: "/mentor/mis-mentorias",
      label: "Mis Mentorías",
      icon: <BookIcon />,
    },
    {
      path: "/mentor/buscar-estudiantes",
      label: "Buscar Estudiantes",
      icon: <MentorIcon />,
    },
    { path: "/mentor/proyectos", label: "Proyectos", icon: <ProjectIcon /> },
    { path: "/mentor/chat", label: "Chat", icon: <ChatIcon /> },
    { path: "/mentor/perfil", label: "Perfiles", icon: <UserIcon /> },
    {
      path: "/mentor/configuracion",
      label: "Configuración",
      icon: <SettingsIcon />,
    },
  ];
||||||| Stash base
    const menuItems = [
        { path: '/', label: 'Panel', icon: <HouseIcon className="sidebar-icon" /> },
        { path: '/mis-estudiantes', label: 'Mis Estudiantes', icon: <UsersIcon className="sidebar-icon" /> },
        { path: '/mis-mentorias', label: 'Mis Mentorías', icon: <BookIcon className="sidebar-icon" /> },
        { path: '/buscar-estudiantes', label: 'Buscar Estudiantes', icon: <MentorIcon className="sidebar-icon" /> },
        { path: '/proyectos', label: 'Proyectos', icon: <ProjectIcon className="sidebar-icon" /> },
        { path: '/chat', label: 'Chat', icon: <ChatIcon className="sidebar-icon" /> },
        { path: '/perfil', label: 'Perfiles', icon: <UserIcon className="sidebar-icon" /> },
        { path: '/configuracion', label: 'Configuración', icon: <SettingsIcon className="sidebar-icon" /> },
    ];
=======
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
>>>>>>> Stashed changes

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
