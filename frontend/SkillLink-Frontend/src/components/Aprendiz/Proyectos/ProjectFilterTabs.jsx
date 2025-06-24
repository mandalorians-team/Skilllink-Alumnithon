import React from "react";

const defaultTabs = ["Todos", "En progreso", "Sin iniciar", "Completados"];

/**
 * Componente para filtrar los proyectos por estado.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.tabs - Lista de estados disponibles.
 * @param {string} props.activeTab - Estado activo seleccionado.
 * @param {Function} props.onTabChange - Función para cambiar el estado activo.
 */
export default function ProjectFilterTabs({
  tabs = defaultTabs,
  activeTab = "Todos",
  onTabChange = () => {},
}) {
  return (
    <div className="bg-gray-800 p-1 rounded-lg flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === tab
              ? "bg-blue-400 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}>
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}
