import React from "react";
import NavbarInterno from "@/components/Main/NavbarInterno";
import { Link } from "react-router-dom";

export default function LayoutEstudiante({ children, active }) {
  // Datos de ejemplo para el usuario (puedes reemplazar por los reales)
  const nombre = "Nombre";
  const apellido = "Apellido";
  const rol = "Estudiante.";
  const bio = "Apasionado por aprender y compartir tecnología.";

  const navItems = [
    { label: "Perfil", route: "/perfil" },
    { label: "Panel", route: "/panel" },
    { label: "Buscar Mentor", route: "/mentor" },
    { label: "Cursos", route: "/courses" },
    { label: "Mentorías", route: "/mentorias" },
    { label: "Proyectos", route: "/proyectos" },
    { label: "Chat", route: "/chat" },
    { label: "Configuración", route: "/configuracion" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#B8CFDF]">
      {/* Header personalizado */}
      <NavbarInterno />
      <div className="flex flex-1 mt-16">
        {/* Sidebar personalizado */}
        <aside className="w-64 bg-[#19191F] p-4 flex flex-col justify-between shadow-2xl rounded-lg">
          <div>
            <nav className="space-y-2">
              {navItems.map((item, i) => (
                <Link
                  to={item.route}
                  key={i}
                  className={`block p-2 rounded transition-all ${
                    active === item.label
                      ? "bg-primary text-white font-bold font-orbitron"
                      : "hover:bg-gray-800 text-[#8C8D8B]"
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-4 text-xs text-gray-400 flex flex-col items-center text-center">
            <img
              src="/images/Mentor 3.jpg"
              alt="Avatar Sidebar"
              className="w-12 h-12 rounded-full object-cover mb-2"
            />
            <p className="font-bold text-white">
              {nombre} {apellido}
            </p>
            <p className="text-[#8C8D8B]">{rol}</p>
            <p className="text-center">{bio}</p>
          </div>
        </aside>
        {/* Contenido principal */}
        <main className="flex-1 px-6  pb-6  bg-blue-200 min-h-screen w-full">{children}</main>
      </div>
    </div>
  );
}
