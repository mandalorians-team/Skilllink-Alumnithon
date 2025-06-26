import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import AlumnoCard from "@/components/Mentor/AlumnoCard";

export default function MisAlumnosPage() {
  useDocumentTitle("Mis Alumnos");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Mis Alumnos</h1>
      <p className="text-black mt-2">
        <AlumnoCard />
      </p>
      {/* Próximamente: Tabla o cuadrícula de alumnos con búsqueda y filtros. */}
    </div>
  );
}
