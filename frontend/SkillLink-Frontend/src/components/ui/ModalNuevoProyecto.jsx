import React, { useState } from "react";
import Modal from "./Modal";

export default function ModalNuevoProyecto({ isOpen, onClose, onCreate }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [categoria, setCategoria] = useState("");
  const [visibilidad, setVisibilidad] = useState("publico");
  const [miembros, setMiembros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
      categoria,
      visibilidad,
      miembros: miembros
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean),
    });
    setNombre("");
    setDescripcion("");
    setFechaInicio("");
    setFechaFin("");
    setCategoria("");
    setVisibilidad("publico");
    setMiembros("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Nuevo Proyecto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre del proyecto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <div className="flex gap-2">
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="border rounded px-3 py-2 w-1/2"
            placeholder="Fecha de inicio"
          />
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="border rounded px-3 py-2 w-1/2"
            placeholder="Fecha de finalización"
          />
        </div>
        <input
          type="text"
          placeholder="Categoría (ej: Tecnología, Educación)"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <div className="flex gap-4 items-center">
          <span>Visibilidad:</span>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="visibilidad"
              value="publico"
              checked={visibilidad === "publico"}
              onChange={() => setVisibilidad("publico")}
            />
            Público
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="visibilidad"
              value="privado"
              checked={visibilidad === "privado"}
              onChange={() => setVisibilidad("privado")}
            />
            Privado
          </label>
        </div>
        <input
          type="text"
          placeholder="Emails de miembros (separados por coma)"
          value={miembros}
          onChange={(e) => setMiembros(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
          Crear Proyecto
        </button>
      </form>
    </Modal>
  );
}
