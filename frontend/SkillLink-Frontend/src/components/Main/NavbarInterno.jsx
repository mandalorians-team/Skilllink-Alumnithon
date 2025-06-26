import { Link } from "react-router-dom";

export default function NavbarInterno() {
  // Aquí podrías pasar el nombre y foto del usuario desde props o contexto
  const userName = "Javier Delgado";
  const userAvatar = "/images/Mentor 3.jpg";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#000000] backdrop-blur-md shadow-lg flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.jpg"
            alt="SkillLink"
            className="h-8 w-8 rounded-md"
          />
          <span className="text-lg font-bold tracking-wide text-white hover:text-[#799EB8] transition duration-300">
            SkillLink
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="px-2 py-1 rounded-md text-sm text-black outline-none focus:ring-2 focus:ring-[#799EB8] transition w-36 sm:w-48"
        />
        <div className="flex items-center gap-2">
          <img
            src={userAvatar}
            alt="Perfil"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-white">{userName}</span>
        </div>
      </div>
    </header>
  );
}
