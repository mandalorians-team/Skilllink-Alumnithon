import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function AgendaPage() {
  useDocumentTitle("Agenda del Mentor");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Agenda</h1>
      <p className="text-gray-300 mt-2">
        Aquí podrás ver tus próximas sesiones, gestionar tu disponibilidad y
        agendar nuevas mentorías.
      </p>
      {/* Próximamente: Un componente de calendario interactivo. */}
    </div>
  );
}
