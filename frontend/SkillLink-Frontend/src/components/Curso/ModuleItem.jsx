import React from "react";
import { Play, CheckCircle, Lock, Edit3, Circle } from "lucide-react";

// Insignia para el nivel de dificultad
const LevelBadge = ({ level }) => {
  if (!level) return null;
  const levelClasses = {
    Básico: "bg-green-500/20 text-green-300",
    Intermedio: "bg-yellow-500/20 text-yellow-300",
    Avanzado: "bg-red-500/20 text-red-300",
  };
  return (
    <span
      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${levelClasses[level]}`}>
      {level}
    </span>
  );
};

// Icono para el estado del módulo
const StatusIcon = ({ status }) => {
  const commonClasses = "w-6 h-6 mr-4";
  const icons = {
    completado: <CheckCircle className={`${commonClasses} text-green-500`} />,
    "en progreso": <Play className={`${commonClasses} text-blue-500`} />,
    pendiente: <Edit3 className={`${commonClasses} text-yellow-500`} />,
    bloqueado: <Lock className={`${commonClasses} text-gray-500`} />,
  };
  return (
    icons[status] || <Circle className={`${commonClasses} text-gray-600`} />
  );
};

export default function ModuleItem({ module }) {
  if (!module) return null;

  return (
    <li className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 mb-3 hover:bg-gray-700 transition-colors cursor-pointer">
      <StatusIcon status={module.status} />
      <div className="flex-grow">
        <h3 className="font-semibold text-white">{module.title}</h3>
        <p className="text-sm text-gray-400">{module.level}</p>
      </div>
      <button className="text-white text-sm font-semibold hover:text-blue-400">
        Ver Lección
      </button>
    </li>
  );
}
