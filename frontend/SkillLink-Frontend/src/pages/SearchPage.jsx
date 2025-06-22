import React from "react";
import { useSearchParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * Página para mostrar los resultados de una búsqueda global.
 * Extrae el término de búsqueda de los parámetros de la URL.
 */
export default function SearchPage() {
  // useSearchParams nos permite leer los parámetros de la URL (ej: ?q=mi-busqueda)
  const [searchParams] = useSearchParams();

  // Obtenemos el valor del parámetro 'q', que contendrá nuestro término de búsqueda.
  const query = searchParams.get("q");

  // Actualizamos el título de la página para reflejar la búsqueda.
  useDocumentTitle(`Resultados para "${query}"`);

  return (
    <div className="p-6 bg-blue-200 min-h-screen">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-white">
          Resultados de búsqueda para:{" "}
          <span className="text-blue-300">"{query}"</span>
        </h1>
      </header>

      {/* Aquí es donde se renderizarían los resultados reales */}
      <div className="bg-white/20 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Proyectos</h2>
        <p className="text-gray-700">
          (Aquí se mostrarían los proyectos que coinciden con "{query}")
        </p>

        <hr className="my-6 border-gray-400" />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cursos</h2>
        <p className="text-gray-700">
          (Aquí se mostrarían los cursos que coinciden con "{query}")
        </p>

        <hr className="my-6 border-gray-400" />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mentores</h2>
        <p className="text-gray-700">
          (Aquí se mostrarían los mentores que coinciden con "{query}")
        </p>
      </div>
    </div>
  );
}
