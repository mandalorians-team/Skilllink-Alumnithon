import { Link } from 'react-router-dom';
import Header from '../../components/Main/Navbar';
import Footer from '../../components/Main/Footer';

export default function PerfilEstudiante() {
  const habilidades = [
    'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'Express.js', 'MongoDB', 'GraphQL', 'Docker', 'Git'
  ];

  const cursos = [
    { 
      img: "/images/perfil1.png", 
      title: "Cursos Esenciales de React", 
      desc: "Aprende los fundamentos de React para construir interfaces modernas.", 
      progress: 100, 
      status: "Completado: Julio 2023" 
    },
    { 
      img: "/images/perfil2.png", 
      title: "Node.js Backend Avanzado", 
      desc: "Crea APIs robustas y escalables con Node.js.", 
      progress: 60, 
      status: "En Progreso: Agosto 2023" 
    },
    { 
      img: "/images/perfil3.png", 
      title: "Principios de Diseño UI/UX", 
      desc: "Domina los conceptos clave para experiencias de usuario efectivas.", 
      progress: 100, 
      status: "Completado: Junio 2023" 
    },
    { 
      img: "/images/perfil4.png", 
      title: "Gestión de Proyectos Ágil", 
      desc: "Implementa metodologías ágiles en tus proyectos.", 
      progress: 30, 
      status: "En Progreso: Septiembre 2023" 
    }
  ];

  const insignias = [
    { icon: '🏆', title: "Maestro Aprendiz de Front-End", desc: "Reconocido por completar con éxito todos los desafíos front-end del semestre, destacando en creatividad y eficiencia.", img: "/images/logro1.jpeg" },
    { icon: '✅', title: "Completación de Mentoría", desc: "Finalizó 3 programas de mentoría, guiando a compañeros con dedicación y excelentes resultados.", img: "/images/logro2.jpeg" },
    { icon: '🤝', title: "Campeón Colaborador", desc: "Premiado por su apoyo constante en proyectos grupales y su capacidad de trabajo en equipo.", img: "/images/logro3.jpeg" },
    { icon: '💡', title: "Contribuidor Colaborativo", desc: "Valorado por aportar ideas innovadoras y soluciones prácticas a retos complejos.", img: "/images/logro4.png" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#B8CFDF]">
      <Header />

      <div className="flex flex-1 mt-14">
        <aside className="w-64 bg-[#19191F] p-4 hidden sm:block border-2 border-primary shadow-2xl rounded-lg">
          <nav className="space-y-2">
            {["Perfil", "Panel", "Cursos", "Mentorías", "Proyectos", "Chat", "Configuración"].map((item, i) => (
              <div
                key={i}
                className={`p-2 rounded ${item === "Perfil" ? "bg-primary text-white font-bold font-orbitron" : "hover:bg-gray-800 text-[#8C8D8B]"}`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-4 space-y-4">
          <h1 className="text-3xl font-bold text-white font-orbitron">Mi Perfil</h1>

          <section className="bg-[#19191F] rounded p-4 relative">
            <Link 
              to="/perfil"
              className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded hover:bg-secondary transition duration-300"
            >
              Editar Perfil
            </Link>
            <div className="flex items-center space-x-4">
              <img src="../images/mentor 3.jpg" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg text-white">Javier Delgado</p>
                <p className="text-sm text-[#8C8D8B]">Desarrollador Web</p>
                <p className="text-xs text-gray-400">
                  Aprendiz apasionado del desarrollo web, con ganas de aprender y contribuir a proyectos innovadores.
                  Especializado en tecnologías front-end y principios UI/UX. Comprometido con el crecimiento continuo y
                  la resolución colaborativa de problemas.
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-col md:flex-row gap-4">
            <section className="bg-[#19191F] rounded p-4 w-full md:w-1/3">
              <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Detalles Personales</h2>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Edad:</strong> 24</li>
                <li><strong>Email:</strong> javier@example.com</li>
                <li><strong>Teléfono:</strong> +57 300 123 4567</li>
                <li><strong>Ubicación:</strong> Bogotá, Colombia</li>
              </ul>
            </section>

            <section className="bg-[#19191F] rounded p-4 w-full md:w-2/3">
              <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Habilidades y Competencias</h2>
              <div className="flex flex-wrap gap-2">
                {habilidades.map((h, i) => (
                  <span
                    key={i}
                    className="border border-primary text-white px-3 py-1 rounded-full text-xs animate-pulse hover:animate-none"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="bg-[#19191F] rounded p-4">
            <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Historial de Aprendizaje</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cursos.map((c, i) => (
                <div key={i} className="bg-[#282C34] rounded p-3">
                  <img src={c.img} alt={c.title} className="rounded mb-2 object-cover w-full h-24" />
                  <p className="text-sm font-bold text-white">{c.title}</p>
                  <p className="text-xs text-gray-400 mb-1">{c.desc}</p>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                      className={`h-2 rounded ${c.progress === 100 ? 'bg-green-500' : c.progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${c.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{c.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#19191F] rounded p-4">
            <h2 className="text-lg mb-2 text-white font-bold font-orbitron">Insignias & Certificaciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {insignias.map((badge, i) => (
                <div
                  key={i}
                  className="relative bg-[#282C34] rounded p-2"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative w-full h-40 preserve-3d animate-flip-slow hover:pause-spin">
                    <div className="absolute inset-0 flex flex-col justify-center items-center backface-hidden" style={{ transform: 'rotateY(0deg)' }}>
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-xl">{badge.icon}</span>
                        <p className="text-sm font-bold text-white font-orbitron">{badge.title}</p>
                      </div>
                      <p className="text-xs text-[#8C8D8B] text-center">{badge.desc}</p>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                      <img src={badge.img} alt="Insignia" className="h-full w-full object-contain" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}
