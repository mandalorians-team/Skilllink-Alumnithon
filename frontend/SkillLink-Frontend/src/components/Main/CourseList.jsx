import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const cursos = [
    {
      img: "/images/curso.jpg",
      titulo: "Dominio de React Hooks",
      autor: "Elise Ortega",
      descripcion: "Profundice en React Hooks y cree apps modernas.",
    },
    {
      img: "/images/curso 2.jpg",
      titulo: "Introducción a Data Science",
      autor: "Alejandra Toloza",
      descripcion: "Analiza datos, crea modelos y domina Python.",
    },
    {
      img: "/images/curso 3.jpg",
      titulo: "Desarrollo Web Full-Stack",
      autor: "Alejandro Archundia",
      descripcion: "Front y back desde cero con tecnologías modernas.",
    },
    {
      img: "/images/curso 4.jpg",
      titulo: "Taller de Escritura Creativa",
      autor: "Ignacio Navarro",
      descripcion: "Da rienda suelta al autor que llevas dentro.",
    },
    {
      img: "/images/curso 5.jpg",
      titulo: "Fundamentos de Mercadeo Digital",
      autor: "Luigi Yantas",
      descripcion: "Comprende SEO, SEM, RRSS y Marketing digital.",
    },
    {
      img: "/images/curso 6.jpg",
      titulo: "Diseño Gráfico para Principiantes",
      autor: "Cristian Yanes",
      descripcion: "Domina Illustrator y Photoshop desde cero.",
    },
  ];

  return (
    <section className="bg-[#b8cfdf] py-12 text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#1a1a1a]">
        Cursos Destacados
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cursos.map((curso, index) => (
          <CourseCard key={index} {...curso} />
        ))}
      </div>

      {/* ✅ Botón con redirección */}
      <Link to="/cursos-disponibles">
        <button className="mt-10 bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
          Ver Todos los Cursos
        </button>
      </Link>
    </section>
  );
}
