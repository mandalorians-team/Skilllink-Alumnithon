import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Main/Navbar";
import Footer from "../../components/Main/Footer";
import "../../index.css";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const isLengthValid = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isLengthValid &&
      hasNumber &&
      hasUpper &&
      hasSpecial &&
      passwordsMatch
    ) {
      // Aquí se conectaría con el backend
      setMensaje("¡Tu contraseña ha sido cambiada exitosamente!");
      setTimeout(() => {
        setMensaje("");
        navigate("/login");
      }, 3000);
    } else {
      setMensaje("Por favor, completa los requisitos de la contraseña.");
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#B8CFDF] flex flex-col font-sans"
      style={{
        backgroundImage: "url('/images/mandalorianx3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/60 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-[75px] flex flex-col items-center justify-center p-4">
          <div className="bg-[#19191F] p-8 rounded-lg shadow-2xl max-w-md w-full animate-fade-in-up">
            <h2 className="text-[#799EB8] text-2xl font-bold mb-4 text-center">
              Cambia tu Contraseña
            </h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Crea una clave segura para tu cuenta.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mb-3 rounded bg-black text-white border border-[#393D47] focus:outline-none focus:ring-2 focus:ring-[#799EB8] transition"
              />

              <ul className="text-sm list-disc ml-5 mb-4 space-y-1">
                <li className={isLengthValid ? "text-green-400" : "text-red-400"}>
                  {isLengthValid ? "✅" : "❌"} Al menos 8 caracteres
                </li>
                <li className={hasNumber ? "text-green-400" : "text-red-400"}>
                  {hasNumber ? "✅" : "❌"} Al menos un número
                </li>
                <li className={hasUpper ? "text-green-400" : "text-red-400"}>
                  {hasUpper ? "✅" : "❌"} Al menos una mayúscula
                </li>
                <li className={hasSpecial ? "text-green-400" : "text-red-400"}>
                  {hasSpecial ? "✅" : "❌"} Al menos un carácter especial
                </li>
              </ul>

              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 mb-2 rounded bg-black text-white border border-[#393D47] focus:outline-none focus:ring-2 focus:ring-[#799EB8] transition"
              />

              {confirmPassword && (
                <p className={`text-sm mb-4 ${passwordsMatch ? "text-green-400" : "text-red-400"}`}>
                  {passwordsMatch ? "✅ Las contraseñas coinciden" : "❌ No coinciden"}
                </p>
              )}

              <button
                type="submit"
                disabled={
                  !isLengthValid || !hasNumber || !hasUpper || !hasSpecial || !passwordsMatch
                }
                className={`w-full px-4 py-2 rounded text-white font-semibold transition ${
                  !isLengthValid || !hasNumber || !hasUpper || !hasSpecial || !passwordsMatch
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#799EB8] to-[#678a9d] hover:scale-105"
                }`}
              >
                Cambiar Contraseña
              </button>
            </form>
          </div>

          {mensaje && (
            <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-50">
              {mensaje}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ChangePassword;
