import React from 'react';
import '../../styles/MentorPage.css';
import '../../styles/App.css';

const MentorCard = ({ name, title, rating, skills, description, image }) => {
    return (
        <div className="mentor-card">
            <img src={image} alt={name} className="mentor-image" />
            <h3>{name}</h3>
            <p className="mentor-title">{title}</p>
            <p className="mentor-rating">⭐ {rating.stars} ({rating.count} reseñas)
            </p>
                <div className="mentor-skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-pill">{skill}</span>
                    ))}
                </div>
            <p className="mentor-description">{description}</p>
            
            <div className="mentor-buttons">
                <button className="view-profile">Ver Perfil</button>
                <button className="contact">Contacto</button>
            </div>
        </div>
    );
};

export default MentorCard;
