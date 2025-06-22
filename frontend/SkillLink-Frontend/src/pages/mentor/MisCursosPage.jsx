import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function MisCursosPage() {
  useDocumentTitle("Mis Cursos");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Mis Cursos</h1>
      <p className="text-gray-300 mt-2">
        Aquí se mostrará una lista de los cursos que has creado o en los que
        participas como mentor.
      </p>
      {/* Próximamente: Herramientas para crear y editar cursos. */}
    </div>
  );
}
