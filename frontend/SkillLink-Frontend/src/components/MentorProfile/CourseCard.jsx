import React from 'react';
import '../../styles/CourseCard.css';

const CourseCard = ({ course = {}, onToggleActive, onEdit, onDelete }) => {
  const {
    icon,
    title = '',
    description = '',
    skills = [],
    duration = '',
    students = 0,
    percentage = 0,
    status,
    isActive,
  } = course;

  return (
    <div className="course-card">
      <div className="course-header">
        <span className="course-icon">{icon}</span>
        <button className={`status-btn ${isActive ? 'active' : 'inactive'}`} onClick={onToggleActive}>
          {isActive ? 'Activo' : 'Inactivo'}
        </button>
      </div>

      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>

      {skills.length > 0 && (
        <p className="course-skills">
          {(Array.isArray(skills) ? skills : []).map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </p>
      )}

      <p className="course-duration">{duration}</p>
      <p className="course-students">
        {students === 1 ? '1 Estudiante' : `${students} Estudiantes`}
      </p>

      <div className="course-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="progress-text">{percentage}%</span>
      </div>

      {status && <span className="course-status">{status}</span>}

      <div className="btn-group">
        <button className="edit-btn" onClick={onEdit}>Editar</button>
        <button className="delete-btn" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default CourseCard;
