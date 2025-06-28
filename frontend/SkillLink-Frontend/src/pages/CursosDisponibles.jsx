import React, { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import "../index.css";

const cursos = [
  { id: 1, titulo: "Introducción a la Programación", descripcion: "Aprende los fundamentos con Python desde cero." },
  { id: 2, titulo: "Frontend con React.js", descripcion: "Crea interfaces modernas usando React y Tailwind." },
  { id: 3, titulo: "Desarrollo Backend con Node.js", descripcion: "Monta APIs robustas con Express y MongoDB." },
  { id: 4, titulo: "Fundamentos de Ciberseguridad", descripcion: "Aprende sobre amenazas, firewalls y pentesting." },
  { id: 5, titulo: "DevOps desde Cero", descripcion: "CI/CD, Docker y Kubernetes para desarrolladores modernos." },
  { id: 6, titulo: "Diseño UI/UX", descripcion: "Aprende diseño atractivo con Figma y heurísticas de usabilidad." },
  { id: 7, titulo: "Machine Learning con Python", descripcion: "Modelos predictivos con scikit-learn y pandas." },
  { id: 8, titulo: "Bases de Datos SQL y NoSQL", descripcion: "Domina PostgreSQL y MongoDB con proyectos reales." },
  { id: 9, titulo: "Arquitectura de Software", descripcion: "Microservicios, patrones y buenas prácticas." },
  { id: 10, titulo: "TypeScript para Desarrolladores JS", descripcion: "Tipado fuerte, interfaces y más." },
  { id: 11, titulo: "API RESTful con Spring Boot", descripcion: "Desarrolla backends sólidos con Java moderno." },
  { id: 12, titulo: "Automatización con Python", descripcion: "Scripting para tareas repetitivas y manejo de archivos." },
  { id: 13, titulo: "Introducción a la Nube con AWS", descripcion: "S3, EC2, IAM, Lambda y prácticas reales." },
  { id: 14, titulo: "Desarrollo Mobile con Flutter", descripcion: "Apps multiplataforma con Dart y widgets." },
  { id: 15, titulo: "Web3 y Blockchain", descripcion: "Smart contracts, Ethereum y tokens en Solidity." },
  { id: 16, titulo: "Testing y QA Automation", descripcion: "Jest, Cypress y automatización de pruebas." },
  { id: 17, titulo: "Scrum y Metodologías Ágiles", descripcion: "Product Owner, Sprints y equipos efectivos." },
  { id: 18, titulo: "Inteligencia Artificial Generativa", descripcion: "Explora GPT, LLMs y sus aplicaciones reales." },
  { id: 19, titulo: "Git y GitHub Avanzado", descripcion: "Pull requests, ramas y flujos colaborativos." },
  { id: 20, titulo: "Despliegue de Apps con Vercel y Netlify", descripcion: "Hosting moderno para frontends." }
];

export default function CursosDisponibles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen pt-10 px-4 md:px-16 pb-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/images/cursos/mandalorian-back.jpg")',
        }}
      >
        {/* Espacio para que no se superponga con el navbar */}
        <div className="mt-24 bg-[#B8CFDF]/80 p-4 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-[#19191F] mb-8 text-center">
            Cursos Disponibles
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {cursos.map((curso) => (
              <div
                key={curso.id}
                className="bg-[#19191F] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col"
              >
                <img
                  src={`/images/cursos/curso${curso.id}.png`}
                  alt={curso.titulo}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.src = "/images/curso-generico.png";
                  }}
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-[#799EB8] text-xl font-semibold mb-2">
                      {curso.titulo}
                    </h2>
                    <p className="text-[#8C8D8B] text-sm mb-4">{curso.descripcion}</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <button className="bg-[#799EB8] hover:bg-[#5e7e91] text-white py-2 px-4 rounded font-semibold transition duration-200">
                      Inscribirse
                    </button>
                    <button className="bg-[#8C8D8B] hover:bg-[#6e6f6e] text-white py-2 px-4 rounded font-semibold transition duration-200">
                      Saber más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
