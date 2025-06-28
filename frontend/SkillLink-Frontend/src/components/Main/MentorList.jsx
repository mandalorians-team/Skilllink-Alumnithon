import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Asegúrate de importar esto
import MentorCard from "./MentorCard";

export default function MentorList() {
  const mentores = [
    {
      img: "/images/Elise 1.jpg",
      nombre: "Elise Ortega",
      cargo: "Frontend Dev / Especialista en AI",
      bio: "Ingeniera senior en Google, experta en sistemas distribuidos y cloud. Apasionada por guiar a desarrolladores.",
    },
    {
      img: "/images/alejandra.jpg",
      nombre: "Alejandra Toloza",
      cargo: "Frontend Dev",
      bio: "Científica en BioGen Corp, especializada en genética y descubrimiento de fármacos.",
    },
    {
      img: "/images/alejandro.jpg",
      nombre: "Alejandro Archundia",
      cargo: "Frontend Dev",
      bio: "Gestor de productos con experiencia en SaaS, conecta tecnología con negocios.",
    },
    {
      img: "/images/ignacio.jpg",
      nombre: "Ignacio Navarro",
      cargo: "Backend Dev",
      bio: "Diseñador UX/UI premiado, experto en experiencias digitales centradas en el usuario.",
    },
    {
      img: "/images/luigi.jpg",
      nombre: "Luigi Yantas",
      cargo: "Backend Dev",
      bio: "Analista financiero que guía sobre inversiones, análisis y carreras en finanzas.",
    },
    {
      img: "/images/cristian.jpg",
      nombre: "Cristian Yanes",
      cargo: "Backend Dev",
      bio: "Fotógrafo y director artístico. Asesora a creativos en técnica y portafolios.",
    },
  ];

  return (
    <section className="bg-[#b8cfdf] py-12 text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#1a1a1a] font-orbitron">
        Conoce a Nuestros Mentores Expertos
      </h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-6xl mx-auto">
        {mentores.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <MentorCard {...mentor} />
          </motion.div>
        ))}
      </div>

      <Link to="/mentores-disponibles">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0,0,0,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-[#007be5] hover:bg-black text-white font-bold px-6 py-3 rounded-md transition-all"
        >
          Encuentra a tu Mentor
        </motion.button>
      </Link>
    </section>
  );
}
