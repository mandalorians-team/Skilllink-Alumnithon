import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bell, MessageSquare, Search } from "lucide-react";
import logo from "@/assets/img/logo.png";
import avatar from "@/assets/img/Avatar.png";
import useAuth from "@/hooks/useAuth";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { role, isAuthenticated } = useAuth();

  const getHeaderText = () => {
    switch (role) {
      case "aprendiz":
        return "Panel del Aprendiz";
      case "mentor":
        return "Panel del Mentor";
      case "admin":
        return "Panel de Administración";
      default:
        return ""; // No mostrar título si no hay rol
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
    }
  };

  const hideSearchOnPaths = ["/proyectos", "/courses", "/mentorias"];
  const showSearch = !hideSearchOnPaths.includes(location.pathname);

  return (
    <header className="bg-header">
      <div className="flex items-center px-6 py-3">
        {/* Logo, Título y Subtítulo */}
        <div className="flex items-center space-x-4 min-w-max">
          <img src={logo} alt="SkillLink Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">SkillLink</span>
          {role && (
            <span className="text-lg text-white font-medium">
              {getHeaderText()}
            </span>
          )}
        </div>

        {/* --- La barra de búsqueda y las acciones de usuario solo se muestran si está autenticado --- */}
        {isAuthenticated && (
          <>
            {/* Renderizado condicional: Muestra la barra de búsqueda o un espaciador */}
            {showSearch ? (
              <div className="flex-1 flex justify-center px-8">
                <form
                  onSubmit={handleSearchSubmit}
                  className="relative w-full max-w-xl">
                  <input
                    type="text"
                    placeholder="Buscar cursos, mentores..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-7 py-2 rounded-lg bg-gray-700 text-card-title placeholder-card-subtitle focus:outline-none focus:ring-2 focus:ring-card-border"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Search className="text-card-subtitle h-5 w-5" />
                  </button>
                </form>
              </div>
            ) : (
              // Espaciador invisible que ocupa el lugar de la barra de búsqueda
              <div className="flex-1"></div>
            )}

            {/* Acciones de usuario */}
            <div className="flex items-center space-x-6 min-w-max">
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors relative">
                <Bell className="h-6 w-6 text-white" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors relative">
                <MessageSquare className="h-6 w-6 text-white" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="h-6 w-6 rounded-full bg-white"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
