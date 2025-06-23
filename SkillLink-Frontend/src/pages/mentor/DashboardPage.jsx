import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DashboardPage() {
  useDocumentTitle("Panel del Mentor");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Panel del Mentor</h1>
      <p className="text-gray-300 mt-2">
        Bienvenido a tu panel. Aquí verás un resumen de tu actividad,
        estadísticas de tus alumnos y tus próximas sesiones.
      </p>
      {/* Próximamente: Widgets de estadísticas, lista de alumnos, etc. */}
    </div>
  );
}
