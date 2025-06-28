import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onSearchChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar Proyectos..."
        value={value}
        onChange={onSearchChange}
        className="bg-gray-800 text-white w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
}
