import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";

// Simulación de datos (puedes reemplazar por fetch a la API real)
const cursos = [
  {
    id: 1,
    titulo: "Introducción a la Programación",
    descripcion: "Aprende los fundamentos con Python desde cero.",
    profesor: "Ana Torres",
    duracion: "6 semanas",
    requisitos: ["Ninguno"],
    modulos: [
      "Variables y Tipos de Datos",
      "Estructuras de Control",
      "Funciones",
      "Manejo de Archivos",
      "Introducción a Objetos",
      "Proyecto Final",
    ],
    valoraciones: [
      {
        nombre: "Luis",
        comentario: "¡Excelente curso para empezar!",
        estrellas: 5,
      },
      { nombre: "María", comentario: "Muy claro y práctico.", estrellas: 4 },
    ],
  },
  {
    id: 2,
    titulo: "Frontend con React.js",
    descripcion: "Crea interfaces modernas usando React y Tailwind.",
    profesor: "Carlos Pérez",
    duracion: "8 semanas",
    requisitos: ["HTML básico", "CSS básico", "JavaScript básico"],
    modulos: [
      "Componentes y Props",
      "Estado y Ciclo de Vida",
      "Eventos y Formularios",
      "Rutas con React Router",
      "Consumo de APIs",
      "Proyecto Final",
    ],
    valoraciones: [
      {
        nombre: "Elena",
        comentario: "Aprendí mucho sobre React.",
        estrellas: 5,
      },
      {
        nombre: "Javier",
        comentario: "Me gustó el enfoque práctico.",
        estrellas: 4,
      },
    ],
  },
  // ...otros cursos...
];

export default function CursoDetalleDisponible() {
  const { id } = useParams();
  const navigate = useNavigate();
  const curso = cursos.find((c) => c.id === Number(id));

  // Detectar si el usuario está logueado (token en localStorage)
  const isLoggedIn = !!localStorage.getItem("token");

  // Función simulada para inscribirse
  const handleInscribirse = () => {
    alert("¡Te has inscrito exitosamente! (Simulado, falta endpoint real)");
    // TODO: Cuando el backend tenga el endpoint, aquí se debe llamar a la API real
  };

  if (!curso) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#B8CFDF]">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Curso no encontrado
        </h2>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#B8CFDF] py-12 px-2">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
          <img
            src={`/images/cursos/curso${curso.id}.png`}
            alt={curso.titulo}
            className="w-64 h-40 object-cover rounded mb-6 shadow"
            onError={(e) => {
              e.target.src = "/images/curso-generico.png";
            }}
          />
          <h1 className="text-3xl font-bold text-[#19191F] mb-2 text-center">
            {curso.titulo}
          </h1>
          <p className="text-gray-700 text-lg mb-4 text-center">
            {curso.descripcion}
          </p>
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Profesor:</span>{" "}
                {curso.profesor}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Duración:</span>{" "}
                {curso.duracion}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Requisitos:</span>{" "}
                {curso.requisitos.join(", ")}
              </p>
            </div>
          </div>
          <div className="w-full mb-6">
            <h2 className="text-lg font-bold text-[#19191F] mb-2">Temario</h2>
            <ul className="list-disc list-inside text-gray-700">
              {curso.modulos.map((mod, i) => (
                <li key={i}>{mod}</li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-6">
            <h2 className="text-lg font-bold text-[#19191F] mb-2">
              Valoraciones de estudiantes
            </h2>
            <ul className="space-y-2">
              {curso.valoraciones.map((val, i) => (
                <li
                  key={i}
                  className="bg-gray-100 rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between">
                  <span className="font-semibold text-gray-800">
                    {val.nombre}
                  </span>
                  <span className="text-yellow-500 ml-2">
                    {"★".repeat(val.estrellas)}
                    <span className="text-gray-400">
                      {"★".repeat(5 - val.estrellas)}
                    </span>
                  </span>
                  <span className="text-gray-700 ml-4">{val.comentario}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition mb-2 w-full ${
              !isLoggedIn
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            onClick={
              isLoggedIn
                ? handleInscribirse
                : () => alert("Debes iniciar sesión para inscribirte.")
            }
            disabled={!isLoggedIn}>
            Inscribirse
          </button>
          {!isLoggedIn && (
            <button
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full mb-2"
              onClick={() => navigate("/login")}>
              Iniciar sesión para inscribirse
            </button>
          )}
          <button
            className="bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-500 transition w-full"
            onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
