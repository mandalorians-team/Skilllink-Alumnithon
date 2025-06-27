import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Main/Navbar";
import Footer from "../../components/Main/Footer";
import "../../index.css";
import { getUserInfo } from "@/services/BackendServices";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);


    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await response.json();
      const token = data.token;

      if (!token) throw new Error("Token no recibido desde el backend");

      // Guardar token local
      localStorage.setItem("token", token);
      console.log("Token guardado:", token);

      // Llamar a la función centralizada
      const userInfo = await getUserInfo();
      console.log("Info del usuario:", userInfo);

      // Redirigir según rol
      switch (userInfo.role) {
        case "ADMIN":
          navigate("/admin/dashboard");
          break;
        case "MENTOR":
          navigate("/mentor/panel");
          break;
        case "LEARNER":
          navigate("/perfil");
          break;
        default:
          console.warn("Rol no reconocido:", userInfo.role);
          navigate("/perfil");
      }
    } catch (err) {
      console.log(err);

      setError(
        "Credencial incorrecta o problema al conectarse con el servidor"
      );

    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#B8CFDF] font-sans">
      <Navbar />

      <main className="flex flex-col md:flex-row flex-grow pt-[55px]">
        <div className="md:w-[40%] w-full flex justify-end pr-4 items-center relative z-10">
          <div className="bg-[#19191F] rounded-lg p-8 shadow-2xl w-full max-w-md my-8 animate-fade-in-up">
            <h2 className="text-center text-[#799EB8] font-bold text-2xl mb-1">
              ¡Bienvenido!
            </h2>
            <p className="text-center text-white text-sm mb-6">
              Inicia sesión y únete a la aventura SkillLink.
            </p>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de usuario"
                className="w-full mb-3 px-4 py-2 rounded bg-black border border-[#393D47] text-[#8C8D8B] text-sm focus:outline-none focus:ring-2 focus:ring-[#799EB8] focus:border-[#799EB8] transition duration-300"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full mb-4 px-4 py-2 rounded bg-black border border-[#393D47] text-[#8C8D8B] text-sm focus:outline-none focus:ring-2 focus:ring-[#799EB8] focus:border-[#799EB8] transition duration-300"
                required
              />
              <button

                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#799EB8] to-[#678a9d] text-white rounded-md mb-4 text-sm font-semibold hover:scale-105 hover:brightness-110 transition-all duration-500 relative overflow-hidden">
                Iniciar Sesion
              </button>
            </form>

            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

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
