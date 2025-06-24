import React from "react";
import { useNavigate } from "react-router-dom";

// Datos de ejemplo para desafíos
const desafios = [
  { id: 1, title: "Crea una app de tareas", tags: "React", level: "Easy" },
  { id: 2, title: "API RESTful", tags: "Node.js", level: "Medium" },
  { id: 3, title: "Empacar con Docker", tags: "DevOps", level: "Hard" },
];

export default function DesafiosPage() {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-blue-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Desafíos Recomendados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {desafios.map((desafio) => (
          <div
            key={desafio.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{desafio.title}</h2>
            <p className="text-gray-600">{desafio.tags}</p>
            <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold w-fit">
              {desafio.level}
            </span>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate(`/desafios/${desafio.id}`)}>
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
