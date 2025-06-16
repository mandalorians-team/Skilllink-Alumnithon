import React from "react";
import "../styles/Encabezado.css";

import logo from"../assets/img/logo.png";


const  Encabezado = () => {
  return (
    <header className="encabezado">
      <div className="encabezado__contenedor">
        {/* Logo y título */}
        <div className="encabezado__logo">
          <img src={logo} alt="Logo SkillLink" className="encabezado__imagen" />
          <h1 className="encabezado__titulo">SkillLink</h1>
          <span className="encabezado__subtitulo">Panel del aprendiz</span>
        </div>

        {/* Buscador */}
        <div className="encabezado__buscador">
          <input
            type="text"
            placeholder="Buscar cursos, mentorías..."
            className="encabezado__input"
          />
        </div>

        {/* Perfil */}
        <div className="encabezado__perfil">
          <button className="encabezado__notificacion">🔔</button>
          <img
            src="/avatar.png"
            alt="Usuario"
            className="encabezado__avatar"
          />
        </div>
      </div>
    </header>

  )
}

export default Encabezado;