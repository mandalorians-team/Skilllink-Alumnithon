import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Main/Navbar";
import Footer from "../../components/Main/Footer";
import { useAuth } from "../../context/AuthContext";
import "../../index.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Usuario y contraseña de prueba, debe ser eliminado cuando se integre con el backend
  const dummyEmail = "test@skilllink.com";
  const dummyPassword = "123456";
  // y se implemente la autenticación real.
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Si quieres usar el dummy login para pruebas:
      if (email === dummyEmail && password === dummyPassword) {
        await login(email, password);
        navigate("/dashboard");
      } else {
        // Si tienes backend, usa solo esto:
        await login(email, password);
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#B8CFDF] font-sans">
      <Navbar />

      <main className="flex flex-col md:flex-row flex-grow pt-[55px]">
        <div className="md:w-[40%] w-full flex justify-end pr-4 items-center relative z-10">
          <div className="bg-[#19191F] rounded-lg p-8 shadow-2xl w-full max-w-md my-8 animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="h-14 w-14 rounded-full border border-[#799EB8] p-1 animate-pulse"
              />
            </div>
            <h2 className="text-center text-[#799EB8] font-bold text-2xl mb-1">
              ¡Bienvenido!
            </h2>
            <p className="text-center text-white text-sm mb-6">
              Inicia sesión y únete a la aventura SkillLink.
            </p>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.email@ejemplo.com"
                className="w-full mb-3 px-4 py-2 rounded bg-black border border-[#393D47] text-[#8C8D8B] text-sm focus:outline-none focus:ring-2 focus:ring-[#799EB8] focus:border-[#799EB8] transition duration-300"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                className="w-full mb-4 px-4 py-2 rounded bg-black border border-[#393D47] text-[#8C8D8B] text-sm focus:outline-none focus:ring-2 focus:ring-[#799EB8] focus:border-[#799EB8] transition duration-300"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#799EB8] to-[#678a9d] text-white rounded-md mb-4 text-sm font-semibold hover:scale-105 hover:brightness-110 transition-all duration-500 relative overflow-hidden">
                <span className="relative z-10">Iniciar Sesión</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </button>

              {[
                { img: "github.png", label: "Github" },
                { img: "google.png", label: "Google" },
              ].map(({ img, label }) => (
                <button
                  key={label}
                  className="w-full py-2 mb-2 border text-sm rounded-md flex items-center justify-center gap-2 bg-white hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
                  <img src={`/images/${img}`} alt={label} className="h-5 w-5" />{" "}
                  Continuar con {label}
                </button>
              ))}

              <p
                className="text-center text-[#799EB8] text-sm hover:underline cursor-pointer mb-2 transition"
                onClick={() => navigate("/restablecer")}>
                ¿Olvidaste tu contraseña?
              </p>
              <p className="text-center text-white text-sm">
                ¿No tienes una cuenta?{" "}
                <span
                  className="text-[#799EB8] hover:underline cursor-pointer transition"
                  onClick={() => navigate("/registro")}>
                  Regístrate
                </span>
              </p>
            </form>

            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
        </div>

        <div className="relative md:w-[60%] w-full hidden md:block z-0">
          <img
            src="/images/mandalorian-helmet.jpg"
            alt="Mando"
            className="w-full h-full object-cover opacity-100 animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
