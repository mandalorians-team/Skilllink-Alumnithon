import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function ConfiguracionPage() {
  useDocumentTitle("Configuración del Mentor");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Configuración</h1>
      <p className="text-gray-300 mt-2">
        Aquí podrás ajustar tu perfil, horario de disponibilidad, notificaciones
        y otras preferencias de la cuenta.
      </p>
      {/* Próximamente: Formularios para editar la configuración. */}
    </div>
  );
}
