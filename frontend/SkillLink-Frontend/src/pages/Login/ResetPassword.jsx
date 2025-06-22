import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Main/Navbar";
import Footer from "../../components/Main/Footer";
import "../../index.css";

function ResetPassword() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se llamaría al backend para enviar el correo
    setMensaje("Hemos enviado un correo con el enlace para restablecer tu contraseña.");
    setTimeout(() => setMensaje(""), 4000);
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
              Restablece tu Contraseña
            </h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Introduce tu correo y recibe un enlace para reiniciar.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="usuario@correo.com"
                required
                className="w-full px-3 py-2 mb-4 rounded bg-black text-white border border-[#393D47] focus:outline-none focus:ring-2 focus:ring-[#799EB8] transition"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#799EB8] to-[#678a9d] text-white px-4 py-2 rounded hover:scale-105 transition-all duration-300"
              >
                Enviar Correo
              </button>
            </form>
            <p
              className="text-center text-sm text-[#799EB8] mt-4 hover:underline cursor-pointer transition"
              onClick={() => navigate("/login")}
            >
              Volver a iniciar sesión
            </p>
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

export default ResetPassword;
