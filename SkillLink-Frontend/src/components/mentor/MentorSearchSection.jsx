import React from 'react';
import '../../styles/MentorSearchSection.css';

export default function MentorSearchSection() {
    return (
    <section className="mentor-search-section">
        <div className="mentor-search-header">
            <h1>Encuentra tu Mentor Perfecto</h1>
            <p>
                Conéctate con expertos que te guiarán en tu viaje por los campos de la
                tecnología, los negocios y la creatividad.
            </p>
            <input
                type="text"
                className="mentor-search-input"
                placeholder="🔍 Buscar por nombre, profesión o sector..."/>
        </div>

        <div className="mentor-filters">
            <select>
                <option>Todas las categorías</option>
                <option>Tecnología</option>
                <option>Negocios</option>
                <option>Creatividad</option>
            </select>

            <select>
                <option>Cualquier Habilidad</option>
                <option>React</option>
                <option>Marketing</option>
                <option>Diseño UX</option>
            </select>

            <select>
                <option>Disponibilidad</option>
                <option>Ahora</option>
                <option>Esta semana</option>
            </select>

            <button className="apply-btn">Aplicar Filtros</button>
        </div>

        <div className="mentor-sort">
            <select>
                <option>Relevancia</option>
                <option>Mejor valorado</option>
                <option>Más reciente</option>
            </select>

            <button className="clear-btn">Borrar Filtros</button>
        </div>
    </section>
    );
}
