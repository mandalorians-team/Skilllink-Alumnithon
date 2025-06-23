import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function MisAlumnosPage() {
  useDocumentTitle("Mis Alumnos");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Mis Alumnos</h1>
      <p className="text-gray-300 mt-2">
        Aquí se mostrará una lista de todos tus aprendices asignados.
      </p>
      {/* Próximamente: Tabla o cuadrícula de alumnos con búsqueda y filtros. */}
    </div>
  );
}
