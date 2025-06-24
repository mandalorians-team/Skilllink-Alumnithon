import React, { useState, useEffect } from "react";

export default function ModalEditarPerfil({ isOpen, onClose, perfil, onSave }) {
  const [form, setForm] = useState(perfil);
  const [preview, setPreview] = useState(
    perfil.imagen || "/images/Mentor 3.jpg"
  );

  useEffect(() => {
    setForm(perfil);
    setPreview(perfil.imagen || "/images/Mentor 3.jpg");
  }, [perfil]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setForm({ ...form, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#19191F] rounded-2xl p-8 w-full max-w-lg shadow-2xl border border-blue-400 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-white font-orbitron text-center">
          Editar Perfil
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Imagen de perfil */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={preview}
              alt="Avatar"
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 shadow"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-sm text-gray-300"
            />
          </div>
          <label className="text-sm text-gray-300 font-semibold">Nombre</label>
          <input
            className="border border-blue-400 rounded px-4 py-2 bg-[#23232b] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            id="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <label className="text-sm text-gray-300 font-semibold">
            Teléfono
          </label>
          <input
            className="border border-blue-400 rounded px-4 py-2 bg-[#23232b] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <label className="text-sm text-gray-300 font-semibold">
            Ubicación
          </label>
          <input
            className="border border-blue-400 rounded px-4 py-2 bg-[#23232b] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            name="ubicacion"
            value={form.ubicacion}
            onChange={handleChange}
            placeholder="Ubicación"
          />
          <label className="text-sm text-gray-300 font-semibold">
            Descripción
          </label>
          <textarea
            className="border border-blue-400 rounded px-4 py-2 bg-[#23232b] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            rows={3}
          />
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 transition">
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
