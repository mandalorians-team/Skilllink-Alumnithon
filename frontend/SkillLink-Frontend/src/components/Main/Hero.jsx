import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "/images/BG1.jpg",
    title: "Conecta con el mentor ideal. Aprende mejor, más rápido y a tu propio ritmo.",
    desc: "Libere todo su potencial con orientación personalizada y conocimientos de expertos."
  },
  {
    img: "/images/BG2.jpg",
    title: "Desbloquea nuevas habilidades con los mejores mentores.",
    desc: "Aprende de quienes ya recorrieron el camino que tú inicias."
  },
  {
    img: "/images/BG3.png",
    title: "Forma parte de una comunidad que impulsa tu crecimiento.",
    desc: "No estudies solo. Evoluciona con el apoyo de una red global."
  },
  {
    img: "/images/BG4.jpg",
    title: "Proyectos reales. Resultados tangibles.",
    desc: "Aplica lo aprendido en desafíos prácticos y colabora en equipo."
  },
  {
    img: "/images/BG5.jpg",
    title: "Tu carrera, tu ritmo, tu éxito.",
    desc: "Personaliza tu experiencia de aprendizaje como nunca antes."
  }
];

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#b8cfdf] pt-[100px] pb-10 flex justify-center">
      <div className="relative w-[85%] max-w-[1200px] h-[340px] rounded-lg overflow-hidden border-[3px] border-[#1e0682] shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center justify-center px-6">
              <motion.div
                key={slides[index].title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-white text-center max-w-2xl z-10"
              >
                <h1 className="font-orbitron text-3xl font-bold mb-3 drop-shadow-lg">
                  {slides[index].title}
                </h1>
                <p className="text-base mb-5 drop-shadow">
                  {slides[index].desc}
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/registro")}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-6 py-2 rounded-md font-semibold transition duration-300 text-white"
                >
                  Empiece Hoy Mismo
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
