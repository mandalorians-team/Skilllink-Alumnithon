import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Main/Navbar";
import Footer from "../../components/Main/Footer";
import "../../index.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const loginResponse = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      if (!loginResponse.ok) {
        if (loginResponse.status === 401) {
          setError("Usuario o contraseña incorrectos");
        } else {
          setError(`Error al iniciar sesión. Código: ${loginResponse.status}`);
        }
        setLoading(false);
        return;
      }

      const loginData = await loginResponse.json();

      console.log("Login data:", loginData);
      // Aquí puedes guardar el token si devuelve uno
      // localStorage.setItem("token", loginData.token);

      navigate("/perfil");
    } catch (err) {
      console.error(err);
      setError("Error de red. Revisa tu conexión.");
    } finally {
      setLoading(false);
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
                placeholder="Ingresa tu contraseña"
                className="w-full mb-4 px-4 py-2 rounded bg-black border border-[#393D47] text-[#8C8D8B] text-sm focus:outline-none focus:ring-2 focus:ring-[#799EB8] focus:border-[#799EB8] transition duration-300"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#799EB8] to-[#678a9d] text-white rounded-md mb-4 text-sm font-semibold hover:scale-105 hover:brightness-110 transition-all duration-500 relative overflow-hidden disabled:opacity-50"
                disabled={loading}
              >
                <span className="relative z-10">
                  {loading ? "Ingresando..." : "Iniciar Sesión"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </button>
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
