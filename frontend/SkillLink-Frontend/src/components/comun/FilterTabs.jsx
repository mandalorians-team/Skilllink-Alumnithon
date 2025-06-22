import React from "react";

const defaultFilters = [
  "Cursos",
  "en progreso",
  "completados",
  "sin iniciar",
  "Desarrollo",
  "Diseño",
];

export default function FilterTabs({
  filters = defaultFilters,
  activeFilter = "Cursos",
  onFilterChange = () => {},
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeFilter === filter
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}>
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
