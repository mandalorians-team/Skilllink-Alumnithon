import React, { useState } from "react";
import { TEST_CREDENTIALS, isDevelopment } from "../../config/testCredentials";

export default function TestCredentialsHelper() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Solo mostrar en modo desarrollo
  if (!isDevelopment()) {
    return null;
  }

  const handleCredentialClick = (email, password) => {
    // Crear un evento personalizado para llenar los campos
    const fillEvent = new CustomEvent("fillCredentials", {
      detail: { email, password },
    });
    window.dispatchEvent(fillEvent);
  };

  return (
    <div className="mb-4 p-3 bg-blue-500/20 border border-blue-500/50 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <p className="text-blue-400 text-sm font-semibold">
          🧪 Credenciales de Prueba (Modo Desarrollo)
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 hover:text-blue-300 text-sm">
          {isExpanded ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-2">
          {Object.entries(TEST_CREDENTIALS).map(([role, credentials]) => (
            <div
              key={role}
              className="flex items-center justify-between p-2 bg-black/20 rounded">
              <div className="flex-1">
                <p className="text-white text-xs font-medium">{role}</p>
                <p className="text-gray-400 text-xs">{credentials.email}</p>
              </div>
              <button
                onClick={() =>
                  handleCredentialClick(credentials.email, credentials.password)
                }
                className="ml-2 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors">
                Usar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
