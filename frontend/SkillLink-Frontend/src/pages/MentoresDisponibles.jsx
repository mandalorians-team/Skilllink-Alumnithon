import React, { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import "../index.css";
import { useNavigate } from "react-router-dom";

const mentores = [
  { id: 1, nombre: "Elise Ortega", especialidad: "Desarrollo Frontend" },
  {
    id: 2,
    nombre: "Alejandra Toloza",
    especialidad: "Arquitectura de Software",
  },
  { id: 3, nombre: "Ignacio Navarro", especialidad: "DevOps & Cloud" },
  { id: 4, nombre: "Cristian Yanes", especialidad: "Backend con Node.js" },
  { id: 5, nombre: "Luigi Yantas", especialidad: "Diseño UX/UI" },
  { id: 6, nombre: "Alejandro Anchundia", especialidad: "Full-Stack Web Dev" },
  { id: 7, nombre: "Alejandro Quintana", especialidad: "Machine Learning" },
  { id: 8, nombre: "Esteban Rocha", especialidad: "Data Engineering" },
  { id: 9, nombre: "Luis Jiménez", especialidad: "Inteligencia Artificial" },
  { id: 10, nombre: "Mirian Beltrán", especialidad: "Ciberseguridad" },
  {
    id: 11,
    nombre: "Camilo Herrera",
    especialidad: "Base de Datos (SQL/NoSQL)",
  },
  { id: 12, nombre: "Diva Alarcón", especialidad: "React & Next.js" },
  { id: 13, nombre: "Sofía Delgado", especialidad: "Scrum & Agile Coaching" },
  { id: 14, nombre: "Ruth Díaz", especialidad: "API RESTful & Microservicios" },
  { id: 15, nombre: "Mariana Castaño", especialidad: "QA Automation" },
  { id: 16, nombre: "Francesca Vargas", especialidad: "Docker & Kubernetes" },
  { id: 17, nombre: "Ana Gómez", especialidad: "Product Management" },
  { id: 18, nombre: "Maria Perez", especialidad: "CI/CD Pipelines" },
  { id: 19, nombre: "Isabella Cárdenas", especialidad: "Flutter & Mobile Dev" },
  { id: 20, nombre: "Tomás Navarro", especialidad: "TypeScript y JS Avanzado" },
  { id: 21, nombre: "Elena Rojas", especialidad: "Power BI y Visualización" },
  { id: 22, nombre: "Pablo Salas", especialidad: "Spring Boot & Java" },
  { id: 23, nombre: "Daniela Ayala", especialidad: "ETL & Big Data" },
  {
    id: 24,
    nombre: "Monica Parra",
    especialidad: "Pentesting y Hacking Ético",
  },
  { id: 25, nombre: "Luis Rincón", especialidad: "AWS & Arquitectura Cloud" },
  { id: 26, nombre: "Manuela Ortiz", especialidad: "Game Dev con Unity" },
  { id: 27, nombre: "Karina Salgado", especialidad: "Firebase & Backendless" },
  { id: 28, nombre: "Sara Lara", especialidad: "Blockchain & Web3" },
  {
    id: 29,
    nombre: "Julieta Méndez",
    especialidad: "Mentoría en Carreras Tech",
  },
  {
    id: 30,
    nombre: "Laura Fonseca",
    especialidad: "Automatización con Python",
  },
];

export default function MentoresDisponibles() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detectar si el usuario está logueado (token en localStorage)
  const isLoggedIn = !!localStorage.getItem("token");

  // Función simulada para invocar mentor
  const handleInvocarMentor = (mentorId) => {
    alert("¡Has solicitado una mentoría! (Simulado, falta endpoint real)");
    // TODO: Cuando el backend tenga el endpoint, aquí se debe llamar a la API real
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen pt-24 pb-20 px-4 md:px-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/mandalorian5.jpg')",
          backgroundAttachment: "fixed", // efecto parallax sutil
        }}>
        <div className="bg-black bg-opacity-70 rounded-xl p-6 md:p-10">
          <h1 className="text-4xl font-bold text-center text-[#799EB8] mb-14 tracking-wide uppercase">
            Conecta con tu Mentor
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
            {mentores.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-[#19191F] border border-[#2B2D31] rounded-3xl shadow-lg hover:shadow-[#799EB8]/40 hover:scale-105 transition duration-300 p-6 text-center">
                <img
                  src={`/images/mentores/mentor${mentor.id}.jpg`}
                  alt={mentor.nombre}
                  onError={(e) => {
                    e.target.src = "/images/mandalorian5.jpg";
                  }}
                  className="w-28 h-28 object-cover rounded-full border-4 border-[#799EB8] mx-auto mb-4 shadow-md"
                />
                <h2 className="text-[#E1E1E1] text-xl font-semibold mb-1 tracking-wide">
                  {mentor.nombre}
                </h2>
                <p className="text-[#8C8D8B] text-sm italic mb-6">
                  {mentor.especialidad}
                </p>
                <button
                  className={`bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition mb-2 w-full ${
                    !isLoggedIn
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600"
                  }`}
                  onClick={
                    isLoggedIn
                      ? () => handleInvocarMentor(mentor.id)
                      : () =>
                          alert("Debes iniciar sesión para solicitar mentoría.")
                  }
                  disabled={!isLoggedIn}>
                  Invocar Mentor
                </button>
                {!isLoggedIn && (
                  <button
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full mb-2"
                    onClick={() => navigate("/login")}>
                    Iniciar sesión para solicitar mentoría
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
