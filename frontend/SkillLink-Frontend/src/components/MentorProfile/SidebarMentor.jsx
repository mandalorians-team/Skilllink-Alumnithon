
import React from 'react';
import { useLocation } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
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


import { ReactComponent as HouseIcon } from '../../assets/icons/house.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg';
import { ReactComponent as BookIcon } from '../../assets/icons/book-open.svg';
import { ReactComponent as MentorIcon } from '../../assets/icons/message.svg';
import { ReactComponent as ProjectIcon } from '../../assets/icons/code-xml.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

function SidebarMentor() {
    const location = useLocation();


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
                <Link to={path} className={location.pathname === path ? 'active' : ''}>
                    {icon}
                    {label}
                </Link>
                </li>
            ))}
            </ul>
            <div className="user">
            👱🏻‍♀️ Maya Gutierrez
            </div>
        </div>
    );
}

export default SidebarMentor;
