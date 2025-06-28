import '../../index.css';
import Navbar from '../../components/Main/Navbar';
import Footer from '../../components/Main/Footer';
import { Link } from 'react-router-dom';

function Registro() {
  


  return (
    <div className="min-h-screen font-sans bg-black flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-[55px] flex flex-col md:flex-row w-full min-h-screen">
        {/* FORMULARIO BÁSICO / LANDING */}
        <section className="w-full md:w-[40%] bg-[#B8CFDF] flex justify-center items-start py-12 px-4">
          <div className="w-full max-w-md bg-[#19191F] border border-[#393D47] rounded-lg shadow-lg p-8 mt-4">
            <h1 className="text-[28px] md:text-[32px] font-bold text-[#F4F4F6]">Crea tu cuenta de SkillLink</h1>
            <p className="text-[#8C8D8B] mt-3 text-[16px] leading-[24px]">
              Comienza tu viaje para aprender sin límites.
            </p>
            <div className="mt-3 text-sm text-[#8C8D8B]">
              ¿Ya tienes una cuenta? <Link to="/login" className="text-[#0056B3] hover:underline">Acceso</Link>
            </div>

            {/* BOTONES SOCIALES */}
            <button className="group mt-6 w-full h-[45px] bg-[#F7F7F7] border border-[#393D47] rounded-md text-[#171A1F] text-sm font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:bg-white">
              <img src="/images/google.png" alt="Google" className="h-9 w-9" />
              <span className="group-hover:tracking-wide transition-all">Regístrate con Google</span>
            </button>
            <button className="group mt-3 w-full h-[45px] bg-white border border-[#393D47] rounded-md text-[#171A1F] text-sm font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-50">
              <img src="/images/github.png" alt="GitHub" className="h-9 w-9" />
              <span className="group-hover:tracking-wide transition-all">Regístrate en GitHub</span>
            </button>

            {/* SEPARADOR */}
            <div className="relative mt-6 mb-5">
              <hr className="border-[#393D47]" />
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#19191F] px-2 text-xs text-[#8C8D8B]">
                O continuar con
              </div>
            </div>

            {/* BOTÓN QUE REDIRIGE AL FORMULARIO COMPLETO */}
            <Link to="/formularioregistro">
              <button className="group mt-5 w-full h-10 bg-gradient-to-r from-[#799EB8] to-[#5b88a5] text-white rounded-md text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="group-hover:tracking-wide transition-all">Registrarme Ahora</span>
              </button>
            </Link>

            {/* POLÍTICAS */}
            <p className="text-[#8C8D8B] mt-4 text-xs text-center leading-[16px]">
              Al crear una cuenta, acepta nuestros Términos de servicio y Política de privacidad.
            </p>
            <p className="text-[#8C8D8B] mt-2 text-xs text-center leading-[16px]">
              Este sitio está protegido por reCAPTCHA y se aplican las políticas de privacidad de Google.
            </p>
          </div>
        </section>

        {/* IMAGEN + FRASE + MANDALORIANO */}
        <section className="hidden md:flex w-full md:w-[60%] relative items-center justify-center overflow-hidden bg-black">
          <div className="relative w-full h-full">
            <img
              src="/images/mandalorian3.jpg"
              alt="Fondo"
              className="w-full h-full object-contain opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white text-center">
              <div className="bg-black/30 rounded-lg p-8 max-w-xl shadow-xl">
                <h2 className="text-[24px] md:text-[42px] font-bold mb-3 leading-tight animate-pulse">
                  Aprende sin límites
                </h2>
                <p className="text-[16px] md:text-[20px] leading-[28px]">
                  Libera tu potencial con orientación experta y un mundo de conocimiento.
                </p>
              </div>

              <div className="bg-black/40 mt-6 rounded-xl p-6 max-w-lg shadow-lg border border-gray-600">
                <p className="text-lg font-semibold text-[#F4F4F6] mb-2">
                  🔥 Este es el camino del conocimiento.
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Aprende como un aprendiz, progresa como un padawan, y lidera como un{' '}
                  <span className="text-[#799EB8] font-medium">Mandalore del código</span>. <br />
                  Bienvenido a tu clan, <span className="text-[#799EB8] font-bold">SkillLinker</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Registro;
