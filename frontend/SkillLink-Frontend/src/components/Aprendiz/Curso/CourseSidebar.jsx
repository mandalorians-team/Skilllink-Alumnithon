import React from "react";
import {
  Book,
  Target,
  Code,
  BrainCircuit,
  ShieldCheck,
  Award,
} from "lucide-react";

const icons = {
  default: <Book size={20} />,
  "Introducción al Machine Learning": <Book size={20} />,
  "Tipos de Aprendizaje": <Target size={20} />,
  "Modelos Básicos": <Code size={20} />,
  "Modelos Avanzados": <BrainCircuit size={20} />,
  "Redes Neuronales y Deep Learning": <BrainCircuit size={20} />,
  "Ética y Buenas Prácticas en IA": <ShieldCheck size={20} />,
  "Proyecto Final con Datos Reales": <Award size={20} />,
};

export default function CourseSidebar({
  course,
  activeModuleId,
  onModuleSelect,
}) {
  if (!course || !course.modules) return null;

  const getIcon = (title) => icons[title] || icons.default;

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 rounded-lg h-full">
      <h2 className="text-xl font-bold mb-4">{course.title}</h2>
      <nav>
        <ul>
          {course.modules.map((module) => (
            <li key={module.id} className="mb-1">
              <button
                onClick={() => onModuleSelect(module.id)}
                className={`w-full text-left flex items-center gap-3 p-2 rounded-md transition-colors ${
                  activeModuleId === module.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-700"
                }`}>
                {getIcon(module.title)}
                <span className="flex-1">{module.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
