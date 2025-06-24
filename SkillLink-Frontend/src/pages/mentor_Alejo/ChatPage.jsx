import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function ChatPage() {
  useDocumentTitle("Chat del Mentor");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Chat</h1>
      <p className="text-gray-300 mt-2">
        Aquí podrás comunicarte directamente con tus alumnos asignados.
      </p>
      {/* Próximamente: Una interfaz de chat en tiempo real. */}
    </div>
  );
}
