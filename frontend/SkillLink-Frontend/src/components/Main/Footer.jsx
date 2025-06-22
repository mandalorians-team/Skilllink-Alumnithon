import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [mensaje, setMensaje] = useState("");

  const handleSuscribir = (e) => {
    e.preventDefault();

    // Simula respuesta (esto luego lo manejará el backend)
    const yaRegistrado = Math.random() < 0.5;

    if (yaRegistrado) {
      setMensaje("Correo registrado anteriormente");
    } else {
      setMensaje("Suscripción exitosa");
    }

    // Limpia el mensaje después de 3 segundos
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <footer className="bg-gradient-to-t from-[#0f0f0f] via-[#19191F] to-[#1a1a1a] text-white px-6 py-12 mt-auto shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Parte izquierda: logo + desc + redes */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Logo SkillLink" className="h-10 w-10 rounded-md" />
            <span className="text-2xl font-bold font-orbitron">SkillLink</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Mantente al día con nuestros últimos cursos y mentores. Únete a nuestra comunidad.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" className="h-5 w-5 filter invert hover:scale-125 transition" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" className="h-5 w-5 filter invert hover:scale-125 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.png" alt="Instagram" className="h-5 w-5 filter invert hover:scale-125 transition" />
            </a>
          </div>
        </div>

        {/* Parte derecha: formulario */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <p className="font-semibold mb-1">Suscríbete a nuestro boletín</p>
          <form onSubmit={handleSuscribir} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 rounded-md text-sm bg-black/60 backdrop-blur-sm text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              required
            />
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(121,158,184,0.7)"
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#799EB8] hover:bg-[#5b88a5] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Suscribirse
            </motion.button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {mensaje && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-50">
          {mensaje}
        </div>
      )}

      {/* Footer inferior */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
        <p>© 2025 SkillLink. Todos los derechos reservados.</p>
        <div className="flex gap-2">
          <button className="border border-gray-600 px-2 py-1 rounded hover:bg-[#292929] text-white">
            Español
          </button>
          <button className="border border-gray-600 px-2 py-1 rounded hover:bg-[#292929] text-white">
            English
          </button>
        </div>
      </div>
    </footer>
  );
}
