import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) {
  const startItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Genera los números de página para los botones.
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // No se renderiza nada si solo hay una página (o menos).
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="w-full bg-background/80 backdrop-blur-sm py-3 px-6 flex justify-between items-center rounded-lg border-t border-gray-300">
      {/* Texto informativo a la izquierda */}
      <p className="text-sm text-gray-700">
        Mostrando {startItem}-{endItem} de {totalItems} Cursos
      </p>

      {/* Controles de paginación a la derecha */}
      <nav className="flex items-center gap-2">
        {/* Botón Anterior */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
          <span className="sr-only">Anterior</span>
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Botones de Números de Página */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-bold transition-colors ${
              currentPage === page
                ? "bg-palette-steel-blue text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}>
            {page}
          </button>
        ))}

        {/* Botón Siguiente */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
          <span className="sr-only">Siguiente</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
}
