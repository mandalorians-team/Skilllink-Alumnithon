import React from "react";

export default function Modal({ isOpen, onClose, onConfirm, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate-fade-in">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="mb-6 text-gray-700">{children}</div>
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            onClick={onClose}>
            Cancelar
          </button>
          {onConfirm && (
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              onClick={onConfirm}>
              Confirmar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
