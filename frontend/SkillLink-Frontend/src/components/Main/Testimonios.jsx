import TestimonioCard from "./TestimonioCard";

export default function Testimonios() {
  const testimonios = [
    {
      img: "/images/Mentor 2.jpg",
      nombre: "Ana Torres",
      perfil: "Estudiante de Ingeniería de Sistemas",
      comentario:
        "SkillLink me puso en contacto con un mentor que transformó mi carrera.",
    },
    {
      img: "/images/Mentor 6.jpg",
      nombre: "Laura Méndez",
      perfil: "Diseñadora UX Junior",
      comentario:
        "Los cursos y mentores son de primera. Altamente recomendado.",
    },
    {
      img: "/images/Hombre 2.jpg",
      nombre: "Alexis Camacho",
      perfil: "Diseñador UX Junior",
      comentario:
        "Nunca pensé que podría encontrar conocimientos tan específicos. SkillLink hizo que conectara sin esfuerzo con un líder del sector.",
    },
  ];

  return (
    <section className="bg-[#b8cfdf] py-12 text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#1a1a1a]">
        Lo Que Nuestros Alumnos Dicen
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonios.map((testi, index) => (
          <TestimonioCard key={index} {...testi} />
        ))}
      </div>
    </section>
  );
}
