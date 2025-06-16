import "../styles/BarraLateral.css";


const BarraLateral= () => {
  return (
    <aside className="barra-lateral">
    <div className="logo">SkillLink</div>
    <nav>
      <ul>
        <li>Inicio</li>
        <li className="activo">Cursos</li>
        <li>Mentorías</li>
        <li>Proyectos</li>
        <li>Prácticas</li>
        <li>Configuración</li>
      </ul>
    </nav>
    <div className="usuario">Alejo Smith</div>
  </aside>
  );
};

export default BarraLateral;