import React from "react";
import { Link } from "react-router-dom";
import NavbarInterno from "../../components/Main/NavbarInterno";

export default function PanelEstudiante() {
  return (
    <div className="flex flex-col min-h-screen bg-[#B8CFDF]">
      <NavbarInterno />

      <div className="flex flex-1 mt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-[#19191F] p-4 hidden sm:flex flex-col justify-between border-2 border-primary shadow-2xl rounded-lg">
          <div>
            <nav className="space-y-2">
              {["Perfil", "Panel", "Cursos", "Mentorías", "Proyectos", "Chat", "Configuración"].map((item, i) => {
                const isActive = item === "Panel";
                const route =
                  item === "Perfil"
                    ? "/perfil"
                    : item === "Panel"
                    ? "/panel-estudiante"
                    : "#";

                return (
                  <Link
                    to={route}
                    key={i}
                    className={`block p-2 rounded transition-all ${
                      isActive
                        ? "bg-primary text-white font-bold font-orbitron"
                        : "hover:bg-gray-800 text-[#8C8D8B]"
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-4 text-xs text-gray-400 flex flex-col items-center text-center">
            <img
              src="/images/Mentor 3.jpg"
              alt="Avatar Sidebar"
              className="w-12 h-12 rounded-full object-cover mb-2"
            />
            <p className="font-bold text-white">Javier Delgado</p>
            <p className="text-[#8C8D8B]">Desarrollador Web</p>
            <p>
              Apasionado por compartir y aprender tecnologías web.
              Especializado en front-end y UX.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-3xl font-bold text-[#171A1F] font-orbitron">
            Vista del Panel
          </h1>

          {/* Fila 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <section className="bg-[#19191F] border border-[#393D47] rounded-xl p-4 flex-1">
              <h2 className="text-xl font-semibold text-[#F4F4F6] font-orbitron">
                Mi Progreso de Aprendizaje
              </h2>
              <p className="text-sm text-[#8C8D8B]">
                Mis Cursos y Retos Completados.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="relative w-32 h-32 rounded-full border-8 border-[#D6E1E9] flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full border-8 border-t-[#799EB8] rounded-full animate-spin-slow"></div>
                  <span className="text-2xl font-bold text-black">75%</span>
                </div>
                <div>
                  <p className="text-[#F4F4F6] text-sm">
                    Tareas Completadas: <strong>15 / 20</strong>
                  </p>
                  <p className="text-[#22C55E] text-sm">
                    +12% en comparación con el mes pasado
                  </p>
                  <button className="mt-2 bg-[#282C34] text-white px-4 py-2 rounded hover:bg-[#3A3F47]">
                    Ver Todos los Cursos
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-[#19191F] border border-[#393D47] rounded-xl p-4 w-full lg:w-96">
              <h2 className="text-xl font-semibold text-[#F4F4F6] font-orbitron">
                Desafíos Recomendados
              </h2>
              <p className="text-sm text-[#8C8D8B]">
                Mejora tus habilidades con nuevos desafíos.
              </p>
              <div className="mt-4 space-y-3">
                {[
                  {
                    title: "Crea una aplicación de tareas pendientes con React Hooks",
                    tags: "React, Administración",
                    level: "Easy",
                    color: "#16A34A",
                  },
                  {
                    title: "Integrar una API RESTful / Node.js",
                    tags: "Node.js, Express",
                    level: "Medium",
                    color: "#CA8A04",
                  },
                  {
                    title: "Empacar una aplicación con Docker",
                    tags: "Docker, DevOps",
                    level: "Hard",
                    color: "#DC2626",
                  },
                ].map((d, i) => (
                  <div key={i} className="bg-[#282C34]/20 rounded p-2">
                    <p className="text-sm font-medium text-[#F4F4F6]">
                      {d.title}
                    </p>
                    <p className="text-xs text-[#8C8D8B]">{d.tags}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span
                        style={{ backgroundColor: d.color }}
                        className="text-white text-xs px-2 py-1 rounded-full"
                      >
                        {d.level}
                      </span>
                      <button className="bg-[#282C34] text-white text-xs px-3 py-1 rounded hover:bg-[#3A3F47]">
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Fila 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <section className="bg-[#19191F] border border-[#393D47] rounded-xl p-4 flex-1">
              <h2 className="text-xl font-semibold text-[#F4F4F6] font-orbitron">
                Mentorías Activas
              </h2>
              <p className="text-sm text-[#8C8D8B]">
                Tus conexiones de mentoría actuales.
              </p>
              <div className="mt-2 space-y-2">
                {[
                  { name: "Elise", role: "Desarrollador Web" },
                  { name: "Ignacio", role: "Data Science" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="bg-[#282C34]/20 rounded p-2 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#F4F4F6]">
                        {m.name}
                      </p>
                      <p className="text-xs text-[#8C8D8B]">{m.role}</p>
                    </div>
                    <button className="bg-[#282C34] text-white text-xs px-3 py-1 rounded hover:bg-[#3A3F47]">
                      Ver
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#19191F] border border-[#393D47] rounded-xl p-4 flex-1">
              <h2 className="text-xl font-semibold text-[#F4F4F6] font-orbitron">
                Actividad Reciente
              </h2>
              <p className="text-sm text-[#8C8D8B]">
                Tus últimas interacciones y actualizaciones
              </p>
              <ul className="mt-2 space-y-2 text-sm text-[#F4F4F6]">
                <li>
                  ✅ Completó el módulo del curso "Patrones de React avanzados".{" "}
                  <span className="text-[#8C8D8B] block text-xs">
                    Hace 2 horas
                  </span>
                </li>
                <li>
                  🚀 Enviado el proyecto "Diseño de API de backend" para
                  revisión.{" "}
                  <span className="text-[#8C8D8B] block text-xs">Ayer</span>
                </li>
                <li>
                  🤝 Tuve una sesión de tutoría con Elise.{" "}
                  <span className="text-[#8C8D8B] block text-xs">
                    Hace 2 días
                  </span>
                </li>
                <li>
                  📦 Comenzó el desafío "Introducción al aprendizaje automático".{" "}
                  <span className="text-[#8C8D8B] block text-xs">
                    Hace 3 días
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-[#19191F] border border-[#393D47] rounded-xl p-4 flex-1">
              <h2 className="text-xl font-semibold text-[#F4F4F6] font-orbitron">
                Exploración de Habilidades
              </h2>
              <div className="space-y-2 mt-2">
                {[
                  { name: "Desarrollo Front-End", progress: 80 },
                  { name: "Cloud Computing", progress: 60 },
                  { name: "Administración de Bases de Datos", progress: 40 },
                  { name: "DevOps", progress: 20 },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-sm text-[#8C8D8B]">{s.name}</p>
                    <div className="w-full bg-[#D6E1E9] h-2 rounded">
                      <div
                        className="h-2 rounded bg-[#799EB8]"
                        style={{ width: `${s.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
