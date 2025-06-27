import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/comun/Footer/";
import NavbarInterno from "../../components/Main/NavbarInterno";
import "../../index.css";

export default function PerfilEstudiante() {
  const [usuario, setUsuario] = useState(null);
  const [detalles, setDetalles] = useState(null);

  const habilidades = [
    'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'Express.js', 'MongoDB', 'GraphQL', 'Docker', 'Git'
  ];

  const cursos = [
    { img: "/images/perfil1.png", title: "Cursos Esenciales de React", desc: "Aprende los fundamentos de React para construir interfaces modernas.", progress: 100, status: "Completado: Julio 2023" },
    { img: "/images/perfil2.png", title: "Node.js Backend Avanzado", desc: "Crea APIs robustas y escalables con Node.js.", progress: 60, status: "En Progreso: Agosto 2023" },
    { img: "/images/perfil3.png", title: "Principios de Diseño UI/UX", desc: "Domina los conceptos clave para experiencias de usuario efectivas.", progress: 100, status: "Completado: Junio 2023" },
    { img: "/images/perfil4.png", title: "Gestión de Proyectos Ágil", desc: "Implementa metodologías ágiles en tus proyectos.", progress: 30, status: "En Progreso: Septiembre 2023" }
  ];

  const insignias = [
    { icon: '🏆', title: "Maestro Aprendiz de Front-End", desc: "Reconocido por completar con éxito todos los desafíos front-end del semestre, destacando en creatividad y eficiencia.", img: "/images/logro1.jpeg" },
    { icon: '✅', title: "Completación de Mentoría", desc: "Finalizó 3 programas de mentoría, guiando a compañeros con dedicación y excelentes resultados.", img: "/images/logro2.jpeg" },
    { icon: '🤝', title: "Campeón Colaborador", desc: "Premiado por su apoyo constante en proyectos grupales y su capacidad de trabajo en equipo.", img: "/images/logro3.jpeg" },
    { icon: '💡', title: "Contribuidor Colaborativo", desc: "Valorado por aportar ideas innovadoras y soluciones prácticas a retos complejos.", img: "/images/logro4.png" }
  ];

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return console.error("Token no encontrado en localStorage");

        const decoded = parseJwt(token);
        const usernameFromToken = decoded?.sub || decoded?.email;
        if (!usernameFromToken) return console.error("No se encontró email en el token");

        const resUsuarios = await fetch("http://localhost:8080/users");
        const users = await resUsuarios.json();
        console.log("Usuarios obtenidos:", users);
        const usuarioActual = users.find(u => u.username === usernameFromToken);
        console.log(usernameFromToken);
        if (!usuarioActual) return console.error("Usuario no encontrado en lista de usuarios");

        setUsuario(usuarioActual);

        const resDetalles = await fetch(`http://localhost:8080/api/learners/${usuarioActual.id}`);
        if (resDetalles.ok) {
          const detalleData = await resDetalles.json();
          console.log ("Detalles del usuario:", detalleData);
          setDetalles(detalleData);
        } else {
          console.warn("No se encontraron detalles adicionales del usuario.");
        }
      } catch (err) {
        console.error("Error en fetch usuario:", err);
      }
    };

    fetchUsuario();
  }, []);

  const parseJwt = (token) => {
    try {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error("Error parseando el token", e);
      return {};
    }
  };

  const nombre = detalles?.firstName || "Nombre";
  const apellido = detalles?.lastName || "Apellido";
  const telefono = detalles?.telefono || "No especificado";
  const pais = detalles?.pais || "Colombia";
  const bio = detalles?.bio || "Apasionado por aprender y compartir tecnología.";
  const rol =  "Estudiante.";

  return (
    <div className="flex flex-col min-h-screen bg-[#B8CFDF]">
      <NavbarInterno />

      <div className="flex flex-1 mt-16">
        <aside className="w-64 bg-[#19191F] p-4 hidden sm:flex flex-col justify-between shadow-2xl rounded-lg">
          <div>
            <nav className="space-y-2">
              {["Perfil", "Panel", "Cursos", "Mentorías", "Proyectos", "Chat", "Configuración"].map((item, i) => (
                <div
                  key={i}
                  className={`p-2 rounded ${item === "Perfil" ? "bg-primary text-white font-bold font-orbitron" : "hover:bg-gray-800 text-[#8C8D8B]"}`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-4 text-xs text-gray-400 flex flex-col items-center text-center">
            <img src="/images/Mentor 3.jpg" alt="Avatar Sidebar" className="w-12 h-12 rounded-full object-cover mb-2" />
            <p className="font-bold text-white">{nombre} {apellido}</p>
            <p className="text-[#8C8D8B]">{rol}</p>
            <p className="text-center">{bio}</p>
          </div>
        </aside>

        <main className="flex-1 p-4 space-y-4">
          <h1 className="text-3xl font-bold text-[#19191F] font-orbitron">Mi Perfil</h1>

          <section className="bg-[#19191F] rounded p-4 relative">
            <Link
              to="/perfil"
              className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded hover:bg-secondary transition duration-300"
            >
              Editar Perfil
            </Link>
            <div className="flex items-center space-x-4">
              <img src="/images/Mentor 3.jpg" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg text-white">{nombre} {apellido}</p>
                <p className="text-sm text-[#8C8D8B]">{rol}</p>
                <p className="text-xs text-gray-400">{bio}</p>
              </div>
            </div>
          </section>

          <div className="flex flex-col md:flex-row gap-4">
            <section className="bg-[#19191F] rounded p-4 w-full md:w-1/3">
              <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Detalles Personales</h2>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Email:</strong> {usuario?.email || "No especificado"}</li>
                <li><strong>Teléfono:</strong> {usuario?.telefono || "No especificado"}</li>
                <li><strong>Ubicación:</strong> {pais}</li>
              </ul>
            </section>

            <section className="bg-[#19191F] rounded p-4 w-full md:w-2/3">
              <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Habilidades y Competencias</h2>
              <div className="flex flex-wrap gap-2">
                {habilidades.map((h, i) => (
                  <span
                    key={i}
                    className="border border-primary text-white px-3 py-1 rounded-full text-xs animate-pulse hover:animate-none"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="bg-[#19191F] rounded p-4">
            <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Historial de Aprendizaje</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cursos.map((c, i) => (
                <div key={i} className="bg-[#282C34] rounded p-3">
                  <img src={c.img} alt={c.title} className="rounded mb-2 object-cover w-full h-24" />
                  <p className="text-sm font-bold text-white">{c.title}</p>
                  <p className="text-xs text-gray-400 mb-1">{c.desc}</p>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                      className={`h-2 rounded ${c.progress === 100 ? 'bg-green-500' : c.progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${c.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{c.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#19191F] rounded p-4">
            <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Insignias & Certificaciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {insignias.map((badge, i) => (
                <div
                  key={i}
                  className="relative bg-[#282C34] rounded p-2"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative w-full h-40 preserve-3d animate-flip-slow hover:pause-spin">
                    <div className="absolute inset-0 flex flex-col justify-center items-center backface-hidden" style={{ transform: 'rotateY(0deg)' }}>
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-xl">{badge.icon}</span>
                        <p className="text-sm font-bold text-white font-orbitron">{badge.title}</p>
                      </div>
                      <p className="text-xs text-[#8C8D8B] text-center">{badge.desc}</p>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                      <img src={badge.img} alt="Insignia" className="h-full w-full object-contain" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
