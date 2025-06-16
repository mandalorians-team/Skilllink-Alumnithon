import React from "react";
import "../styles/TabsFiltro.css";

const TabsFiltro = () => {
  return(
  <div className="filtros">
  <button className="activo">Cursos</button>
  <button>En curso</button>
  <button>Completados</button>
  <button>Sin iniciar</button>
  <button>Destacados</button>
  <button>Ciencia de datos</button>
</div>
  )

};

export default TabsFiltro;