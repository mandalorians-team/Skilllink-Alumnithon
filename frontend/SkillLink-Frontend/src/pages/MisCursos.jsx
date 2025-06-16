import React, {useEffect} from "react";
import BarraLateral from "../components/BarraLateral";
import Encabezado from "../components/Encabezado";
import TabsFiltro from "../components/TabsFiltro";
import TarjetaCurso from "../components/TarjetaCurso";
import Paginacion from "../components/Paginacion";
import CursoDestacado from "../components/CursoDestacado";
import "../styles/misCursos.css";
import { pruebaConexion } from "../services/BackendServices";



const MisCursos = () => {
  useEffect(() => {
    pruebaConexion().then((data) => {
      console.log('✅ Conexión exitosa:', data);
    }).catch((error) => {
      console.error('❌ Error al conectar con el backend:', error);
    });
  }, []);
  
  const cursos = [
    {
      imagen: "/curso1.jpg",
      titulo: "JavaScript avanzado",
      autor: "Dr. Elena Paredes",
    },
    {
      imagen: "/curso2.jpg",
      titulo: "React desde cero",
      autor: "Luis Cordero",
    },
    {
      imagen: "/curso3.jpg",
      titulo: "Machine Learning",
      autor: "Ana Ruiz",
    },
  ];

  return (
    <>
      <Encabezado />
      <div className="contenedor-principal">
        <BarraLateral />
        <div className="contenido-principal">
          <CursoDestacado />
          <h2 className="titulo-pagina">Mis Cursos</h2>
          <TabsFiltro />
          <div className="lista-cursos">
            {cursos.map((curso, index) => (
              <TarjetaCurso
                key={index}
                imagen={curso.imagen}
                titulo={curso.titulo}
                autor={curso.autor}
              />
            ))}
          </div>
          <Paginacion />
        </div>
      </div>
    </>
  );
};

export default MisCursos;
