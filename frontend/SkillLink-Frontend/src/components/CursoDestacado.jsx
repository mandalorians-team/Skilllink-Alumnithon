import React from "react";
import "../styles/CursoDestacado.css";
import CursoImg from "../assets/curso-js.png";


export default function CursoDestacado () {

  const CursoDatos ={
    Titulo: "Conceptos avanzados de JavaScript",
    Profesor: "Dr. Elena Paredes",
    Tiempo: "última sesión hace 2 días",
    Siguiente: "Domina los JavaScript Anidados",
    Progreso: "60",
    Imagen: CursoImg
  }

  return (
<section className="curso-destacado">
          <img src={CursoDatos.Imagen} alt="Imagen curso" />
          <div className="informacion">
            <h3>{CursoDatos.Titulo}</h3>
            <p>{CursoDatos.Profesor} - {CursoDatos.Tiempo}</p>
            <p className="siguiente">Siguiente: {CursoDatos.Siguiente}</p>
            <progress value={CursoDatos.Progreso} max="100"></progress>
            <button className="boton-primario">Reanudar curso</button>
          </div>

        </section>
  )
}
