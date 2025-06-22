import "../styles/TarjetaCurso.css"

const CursoTarjeta = (/*{ imagen, titulo, autor, extrellas, boton}*/) => {
    return (
      <div className="lista-cursos">
      {[1, 2, 3].map((curso, index) => (
        <div key={index} className="tarjeta-curso">
          <img src="/assets/img/curso-thumbnail.jpg" alt="Curso" />
          <div className="detalle">
            <h4>Nombre del Curso</h4>
            <p>Descripción corta del curso.</p>
            <div className="calificacion">⭐⭐⭐⭐☆</div>
            <div className="metadatos">
              <span>3h 30min</span>
              <span>Avanzado</span>
            </div>
            <button className="boton-primario">Continuar aprendiendo</button>
          </div>
        </div>
      ))}
    </div>
    )


}

export default CursoTarjeta;