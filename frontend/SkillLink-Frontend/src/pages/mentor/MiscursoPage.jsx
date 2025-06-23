import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";



export default function MiscursosPage() {
  useDocumentTitle("Mis Cursos");

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Mis Cursos</h1>
    </div>
  );
}