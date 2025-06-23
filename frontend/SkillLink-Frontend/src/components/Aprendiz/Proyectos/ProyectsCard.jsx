import React from "react";
import { MoreHorizontal, Calendar } from "lucide-react";

/**
 * Componente para la insignia de estado del proyecto (Activo, Completado, etc.).
 * Cambia de color y texto según el estado proporcionado.
 * @param {{ status: 'activo' | 'completado' | 'vencido' }} props
 */
const StatusBadge = ({ status }) => {
  // Clases base para todas las insignias
  const baseClasses = "px-2 py-0.5 text-xs font-semibold rounded-full";
  let statusClasses = "";
  let statusText = "";

  // Selecciona el estilo y texto según el estado
  switch (status) {
    case "activo":
      statusClasses = "bg-blue-500/20 text-blue-300";
      statusText = "Activo";
      break;
    case "completado":
      statusClasses = "bg-green-500/20 text-green-300";
      statusText = "Completado";
      break;
    case "vencido":
      statusClasses = "bg-red-500/20 text-red-300";
      statusText = "Vencido";
      break;
    default:
      statusClasses = "bg-gray-500/20 text-gray-300";
      statusText = "Indefinido";
  }

  return (
    <span className={`${baseClasses} ${statusClasses}`}>{statusText}</span>
  );
};

/**
 * Componente que muestra una barra de progreso visual.
 * @param {{ progress: number }} props - El progreso como un número de 0 a 100.
 */
const ProgressBar = ({ progress }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-semibold text-gray-300">Progreso</span>
      <span className="text-sm text-gray-400">{progress}% Completado</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-1.5">
      {/* El ancho de la barra interior se controla con el estilo en línea */}
      <div
        className="bg-blue-400 h-1.5 rounded-full"
        style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

/**
 * Componente que muestra los avatares de los miembros del equipo.
 * @param {{ members: {avatar: string}[] }} props - Un array de objetos de miembro.
 */
const TeamMembers = ({ members }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-300 mb-2">
      Miembros del Equipo
    </h4>
    <div className="flex">
      {members.map((member, index) => (
        <img
          key={index}
          src={member.avatar}
          alt={`member ${index + 1}`}
          // El margen negativo apila los avatares
          className={`w-8 h-8 rounded-full ring-2 ring-gray-800 ${
            index > 0 ? "-ml-2" : ""
          }`}
        />
      ))}
    </div>
  </div>
);

/**
 * Componente principal de la tarjeta del proyecto.
 * Une todos los sub-componentes para mostrar la información completa del proyecto.
 * @param {{ proyect: object }} props - El objeto completo del proyecto.
 */
export default function ProyectsCard({ proyect }) {
  // Medida de seguridad: si no hay datos del proyecto, no renderizar nada.
  if (!proyect) return null;

  // Desestructuramos los datos del proyecto para un uso más fácil
  const {
    title,
    image,
    description,
    status,
    dueDate,
    progress,
    members = [], // Valor por defecto para evitar errores si no hay miembros
  } = proyect;

  return (
    // Contenedor principal de la tarjeta con Flexbox para organizar el contenido verticalmente
    <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col gap-4 shadow-lg h-full">
      {/* Encabezado con título y botón de opciones */}
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg leading-tight">{title}</h3>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Insignia de estado del proyecto */}
      <div>
        <StatusBadge status={status} />
      </div>

      {/* Imagen principal del proyecto */}
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg"
      />

      {/* Descripción corta del proyecto */}
      <p className="text-gray-400 text-sm leading-snug">{description}</p>

      {/* Fecha de vencimiento */}
      <div className="text-gray-400 text-sm flex items-center gap-2">
        <Calendar size={16} />
        <span>Ven: {dueDate}</span>
      </div>

      {/* Barra de progreso y miembros del equipo */}
      <ProgressBar progress={progress} />
      <TeamMembers members={members} />

      {/* Botones de acción. 'mt-auto' empuja los botones al final de la tarjeta */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-1.5 px-3 rounded-md transition-colors">
          Ver Detalles
        </button>
        <button className="bg-blue-400 hover:bg-blue-500 text-gray-900 text-sm font-semibold py-1.5 px-3 rounded-md transition-colors">
          Unirse
        </button>
      </div>
    </div>
  );
}
