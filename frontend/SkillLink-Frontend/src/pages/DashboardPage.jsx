import React from "react";
import { useAuth } from "@/context/AuthContext";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DashboardPage() {
  useDocumentTitle("Panel Principal");
  const { user, isAuthenticated } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Bienvenido a SkillLink</h1>
      {isAuthenticated ? (
        <p className="text-black font-bold font-orbitron mt-2">
          Hola, <span className="font-bold">{user.name}</span>. Usa el menú
          lateral para navegar por la aplicación.
        </p>
      ) : (
        <p className="text-black mt-2">
          Por favor, inicia sesión para acceder a tus cursos y mentorías.
        </p>
      )}
    </div>
  );
}
