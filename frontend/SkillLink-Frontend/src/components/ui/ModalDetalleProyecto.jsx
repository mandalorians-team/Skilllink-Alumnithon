import React from "react";
import Modal from "./Modal";

export default function ModalDetalleProyecto({
  isOpen,
  onClose,
  proyecto,
  onUnirse,
  onIrPaginaDetalle,
}) {
  if (!proyecto) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={proyecto.title}>
      <div className="flex flex-col gap-2">
        <img
          src={proyecto.image}
          alt={proyecto.title}
          className="w-full h-40 object-cover rounded"
        />
        <p>
          <b>Descripción:</b> {proyecto.description}
        </p>
        <p>
          <b>Categoría:</b> {proyecto.categoria || "No especificada"}
        </p>
        <p>
          <b>Estado:</b> {proyecto.status}
        </p>
        <p>
          <b>Visibilidad:</b> {proyecto.visibilidad || "Público"}
        </p>
        <p>
          <b>Miembros:</b>{" "}
          {proyecto.miembros && proyecto.miembros.length > 0
            ? proyecto.miembros.join(", ")
            : "Ninguno"}
        </p>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            onClick={() => onUnirse(proyecto)}>
            Unirse al Proyecto
          </button>
          <button
            className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-800"
            onClick={() => onIrPaginaDetalle(proyecto)}>
            Ir a la página de detalle
          </button>
        </div>
      </div>
    </Modal>
  );
}
