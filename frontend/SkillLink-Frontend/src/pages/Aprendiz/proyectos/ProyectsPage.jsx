import React, { useState } from "react";
import { Plus } from "lucide-react";
import ProjectFilterTabs from "@/components/Aprendiz/Proyectos/ProjectFilterTabs";
import SearchBar from "@/components/comun/SearchBar";
import ProyectsCard from "@/components/Aprendiz/Proyectos/ProyectsCard";
import useDocumentTitle from "@/hooks/useDocumentTitle";

// Se definen los datos de ejemplo para los proyectos.
// En una aplicación real, estos datos vendrían de una API.
const sampleProjects = [
  {
    id: 1,
    title: "Rediseño Plataforma SkillLink",
    description:
      "Dirigir un rediseño completo de la interfaz de usuario SkillLink.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
    status: "activo",
    dueDate: "2024-08-31",
    progress: 75,
    members: [
      { avatar: "https://i.pravatar.cc/150?img=1" },
      { avatar: "https://i.pravatar.cc/150?img=2" },
      { avatar: "https://i.pravatar.cc/150?img=3" },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Model for Mentor Matching",
    description: "Desarrollar y desplegar un modelo predictivo ML.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
    status: "activo",
    dueDate: "2024-09-15",
    progress: 50,
    members: [
      { avatar: "https://i.pravatar.cc/150?img=4" },
      { avatar: "https://i.pravatar.cc/150?img=5" },
    ],
  },
  {
    id: 3,
    title: "Desarrollo App Móviles (iOS/Android)",
    description: "Cree una aplicación móvil multiplataforma para SkillLink.",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=60",
    status: "vencido",
    dueDate: "2024-06-30",
    progress: 90,
    members: [
      { avatar: "https://i.pravatar.cc/150?img=6" },
      { avatar: "https://i.pravatar.cc/150?img=7" },
    ],
  },
  {
    id: 4,
    title: "Sistema de Selección de Contenidos",
    description:
      "Diseñar un sistema para la curación y categorización eficientes de los recursos.",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=800&q=60",
    status: "completado",
    dueDate: "2024-05-15",
    progress: 100,
    members: [{ avatar: "https://i.pravatar.cc/150?img=8" }],
  },
];

/**
 * Página principal para mostrar la lista de proyectos del usuario.
 */
export default function ProyectsPage() {
  // Hook para establecer el título de la pestaña del navegador.
  useDocumentTitle("Mis Proyectos");

  // Define las pestañas para el componente de filtros.
  const tabs = ["Todo", "Activo", "Completado", "Atrasado"];

  // Estado para almacenar la lista de proyectos. Inicializado con datos de ejemplo.
  // En el futuro, 'setProjects' se podría usar para actualizar la lista (ej: al filtrar).
  const [projects] = useState(sampleProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // Re-introducimos la lógica de filtrado local
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-blue-200 min-h-screen">
      {/* Encabezado de la página */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Mis Proyectos</h1>
        <button className="bg-blue-400 text-white flex items-center px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Crear Nuevo Proyecto
        </button>
      </header>

      {/* Volvemos a poner los filtros y la barra de búsqueda juntos */}
      <div className="flex justify-between items-center mb-6">
        <ProjectFilterTabs tabs={tabs} />
        <SearchBar
          value={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cuadrícula para mostrar las tarjetas de proyecto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProyectsCard key={project.id} proyect={project} />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-20 col-span-full">
            <p>No se encontraron proyectos para "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
}
