import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Cursos", path: "/cursos-disponibles" },      // CAMBIADO a /courses
    { name: "Mentores", path: "/mentores-disponibles" },  // CAMBIADO a /mentorias
    { name: "Registrarse", path: "/registro" },
    { name: "Login", path: "/login" },
    { name: "Restablecer Contraseña", path: "/restablecer" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#000000] backdrop-blur-md shadow-lg flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo1.png"
            alt="SkillLink"
            className="h-10 w-auto rounded-md"
          />
          <span className="text-xl font-bold tracking-wide text-white hover:text-[#799EB8] transition duration-300">
            SkillLink
          </span>
        </Link>
      </div>

      <nav className="hidden md:flex gap-6 font-medium">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + "/");
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-white transition duration-300
                ${isActive ? "font-bold after:w-full" : "after:w-0"}
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#799EB8] after:transition-all after:duration-300 hover:after:w-full
                hover:text-[#799EB8]`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <input
        type="text"
        placeholder="Buscar cursos..."
        className="px-3 py-1 rounded-md text-sm text-black outline-none focus:ring-2 focus:ring-[#799EB8] transition"
      />
    </header>
  );
}
