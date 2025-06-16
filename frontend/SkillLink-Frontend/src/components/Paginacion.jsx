import React from 'react';
import "../styles/Paginacion.css";

const Paginacion = () => {
  return (
    <div className="paginacion">
      <span>Mostrando 1-10 de 12 cursos</span>
      <div className="paginacion-botones">
        <button>Anterior</button>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default Paginacion;