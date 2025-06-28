import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProyectoDetallePage({ proyectos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyecto = proyectos.find(p => p.id === Number(id));

  if (!proyecto) return <div>Proyecto no encontrado</div>;

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600">Volver</button>
      <h1 className="text-3xl font-bold mb-2">{proyecto.title}</h1>
      <img src={proyecto.image} alt={proyecto.title} className="w-full h-60 object-cover rounded mb-4" />
      <p><b>Descripción:</b> {proyecto.description}</p>
      <p><b>Categoría:</b> {proyecto.categoria || "No especificada"}</p>
      <p><b>Estado:</b> {proyecto.status}</p>
      <p><b>Visibilidad:</b> {proyecto.visibilidad || "Público"}</p>
      <p><b>Miembros:</b> {(proyecto.miembros && proyecto.miembros.length > 0) ? proyecto.miembros.join(", ") : "Ninguno"}</p>
      <button
        className="bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
        onClick={() => alert('¡Te has unido al proyecto!')}
      >
        Unirse al Proyecto
      </button>
    </div>
  );
}