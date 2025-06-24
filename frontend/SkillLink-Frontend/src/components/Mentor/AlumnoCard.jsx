import React from "react";
import { alumnoData } from "../../data/alumnoData";

const DefaultAvatar = "https://via.placeholder.com/100"; // Imagen por defecto

export default function AlumnoCard({ alumno = alumnoData }) {
  if (!alumno || !alumno.nombre) {
    return (
      <div className="bg-header text-card-subtitle rounded-lg p-4 flex items-center justify-center min-h-[180px] shadow-md">
        <span>No hay datos del alumno</span>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 w-full max-w-xs mx-auto transition-transform hover:scale-105 hover:shadow-2xl md:flex-row md:max-w-2xl md:items-start">
      <div className="flex-shrink-0">
        <img
          src={alumno.avatar || DefaultAvatar}
          alt={alumno.nombre}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-blue-500 shadow"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-bold text-blue-700 mb-1">
          {alumno.nombre}
        </h2>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>
            <span className="font-semibold">Email:</span> {alumno.email}
          </li>
          <li>
            <span className="font-semibold">Teléfono:</span> {alumno.telefono}
          </li>
          <li>
            <span className="font-semibold">Género:</span> {alumno.genero}
          </li>
          <li>
            <span className="font-semibold">Nivel:</span> {alumno.nivel}
          </li>
        </ul>
      </div>
    </div>
  );
}
