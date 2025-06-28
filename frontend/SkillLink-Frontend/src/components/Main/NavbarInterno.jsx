import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavbarInterno() {
  const userName = "Javier Delgado";
  const userAvatar = "/images/Mentor 3.jpg";
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí podrías limpiar localStorage, cookies, etc.
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#000000] backdrop-blur-md shadow-lg flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo1.png"
            alt="SkillLink"
            className="h-8 w-8 rounded-md"
          />
          <span className="text-lg font-bold tracking-wide text-white hover:text-[#799EB8] transition duration-300">
            SkillLink
          </span>
        </Link>
      </div>

      <div className="relative flex items-center gap-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="px-2 py-1 rounded-md text-sm text-black outline-none focus:ring-2 focus:ring-[#799EB8] transition w-36 sm:w-48"
        />

        {/* Avatar con dropdown */}
        <div className="relative">
          <img
            src={userAvatar}
            alt="Perfil"
            className="h-8 w-8 rounded-full object-cover cursor-pointer border-2 border-[#799EB8]"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-[#19191F] rounded-lg shadow-xl z-50 text-center py-3 animate-fadeIn">
              <p className="text-white text-sm mb-2">{userName}</p>
              <button
                onClick={handleLogout}
                className="bg-[#799EB8] hover:bg-[#5e7e91] text-white py-1.5 px-4 rounded-full text-sm font-medium transition duration-200"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
