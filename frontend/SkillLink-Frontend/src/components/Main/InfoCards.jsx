import {
  FaEye,
  FaBullseye,
  FaHeart,
  FaLightbulb,
  FaUserFriends,
} from "react-icons/fa";

export default function InfoCards() {
  const info = [
    {
      titulo: "VISIÓN",
      texto:
        "Empoderar a estudiantes y profesionales conectándolos con mentores y recursos educativos que aceleren su crecimiento.",
      icono: <FaEye size={28} />,
    },
    {
      titulo: "MISIÓN",
      texto:
        "Brindar acceso inclusivo y personalizado a oportunidades de aprendizaje y mentoría en un entorno colaborativo.",
      icono: <FaBullseye size={28} />,
    },
    {
      titulo: "VALORES",
      texto:
        "Inclusión, innovación, colaboración, excelencia y pasión por el conocimiento.",
      icono: <FaHeart size={28} />,
    },
    {
      titulo: "¿QUÉ ES SKILLLINK?",
      texto:
        "Una plataforma que conecta personas con mentores, cursos, proyectos y comunidades para aprender y transformar su carrera.",
      icono: <FaLightbulb size={28} />,
    },
    {
      titulo: "¿A QUIÉN VA DEDICADO?",
      texto:
        "A estudiantes, profesionales, autodidactas y soñadores que buscan mejorar sus habilidades y alcanzar su máximo potencial.",
      icono: <FaUserFriends size={28} />,
    },
  ];

  return (
    <section className="bg-[#b8cfdf] py-16 text-center">
      <h2 className="text-3xl font-extrabold mb-12 text-[#1a1a1a] font-orbitron">
        Conoce SkillLink
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {info.map((card, index) => (
          <div
            key={index}
            className="w-[260px] h-[200px] bg-black text-white p-6 rounded-xl shadow-2xl relative overflow-hidden group transition-transform duration-700 hover:rotate-3 hover:scale-105 border border-gray-600"
          >
            {/* Fondo dinámico */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl group-hover:opacity-10 transition duration-700"></div>

            {/* Front */}
            <div className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 group-hover:opacity-0 z-10">
              {card.icono}
              <span className="text-lg font-bold mt-2">{card.titulo}</span>
            </div>

            {/* Back */}
            <div className="absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 bg-black/70 backdrop-blur-md rounded-xl">
              <p className="text-sm leading-relaxed text-gray-200 text-left">
                {card.texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
