import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black/80 text-white text-center rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Glow dinámico detrás */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-2xl animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-extrabold mb-6 leading-snug font-orbitron relative z-10"
      >
        ¿Listo para encontrar tu Mentor Ideal?
      </motion.h2>

      <Link to="/registro" className="relative z-10">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(59,130,246,0.7)", // azul-600
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
        >
          Explora todas las Oportunidades
        </motion.button>
      </Link>
    </section>
  );
}
