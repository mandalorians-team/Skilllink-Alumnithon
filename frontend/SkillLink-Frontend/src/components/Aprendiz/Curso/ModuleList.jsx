import React from "react";
import ModuleItem from "./ModuleItem";

export default function ModuleList({ modules }) {
  if (!modules || modules.length === 0) {
    return <p className="text-gray-400">No hay módulos disponibles.</p>;
  }

  return (
    <ul className="space-y-2">
      {modules.map((module) => (
        <ModuleItem key={module.id} module={module} />
      ))}
    </ul>
  );
}
