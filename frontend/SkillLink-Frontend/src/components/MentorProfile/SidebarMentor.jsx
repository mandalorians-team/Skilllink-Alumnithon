import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@/styles/Sidebar.css';

import { ReactComponent as HouseIcon } from '@/assets/icons/house.svg';
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg';
import { ReactComponent as BookIcon } from '@/assets/icons/book-open.svg';
import { ReactComponent as MentorIcon } from '@/assets/icons/message.svg';
import { ReactComponent as ProjectIcon } from '@/assets/icons/code-xml.svg';
import { ReactComponent as ChatIcon } from '@/assets/icons/chat.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg';

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
