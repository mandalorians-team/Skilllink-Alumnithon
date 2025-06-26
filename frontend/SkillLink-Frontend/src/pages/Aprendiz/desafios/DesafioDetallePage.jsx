import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Datos de ejemplo para desafíos
const desafios = [
  {
    id: 1,
    title: "Crea una app de tareas",
    tags: "React",
    level: "Easy",
    descripcion: "Crea una aplicación de tareas pendientes usando React Hooks.",
  },
  {
    id: 2,
    title: "API RESTful",
    tags: "Node.js",
    level: "Medium",
    descripcion: "Construye una API RESTful con Node.js y Express.",
  },
  {
    id: 3,
    title: "Empacar con Docker",
    tags: "DevOps",
    level: "Hard",
    descripcion: "Empaqueta una aplicación usando Docker.",
  },
];

export default function DesafioDetallePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const desafio = desafios.find((d) => d.id === Number(id));

  if (!desafio) return <div className="p-6">Desafío no encontrado</div>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600">
        Volver
      </button>
      <h1 className="text-2xl font-bold mb-2">{desafio.title}</h1>
      <p className="mb-2">
        <b>Tags:</b> {desafio.tags}
      </p>
      <p className="mb-2">
        <b>Dificultad:</b> {desafio.level}
      </p>
      <p className="mb-4">{desafio.descripcion}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Comenzar Desafío
      </button>
    </div>
  );
}
