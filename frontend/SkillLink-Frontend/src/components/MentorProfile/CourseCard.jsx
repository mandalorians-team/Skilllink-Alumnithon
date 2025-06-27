import React from 'react';
import '../../styles/CourseCard.css';

const CourseCard = ({
  icon,
  title,
  description,
  skills,
  duration,
  students, /* Próximamente se generará un contador de estudiantes inscritos */
  percentage,
  status,
  isActive,
  onToggleActive,
  onEdit,
}) => {
  return (
    <div className="course-card">
      <div className="course-header">
        <span className="course-icon">{icon}</span>
        <button className={`status-btn ${isActive ? 'active' : 'inactive'}`} onClick={onToggleActive}>
          {isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <p className="course-skills">{skills}</p>
      <p className="course-duration">{duration}</p>
    <p className="course-students">{students == 1 ? 'Estudiante' : 'Estudiantes'}</p>
      <div className="course-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="progress-text">{percentage}%</span>
      </div>
      {status && <span className="course-status">{status}</span>}
      <button className="edit-btn" onClick={onEdit}>Editar</button>
    </div>
  );

};

export default CourseCard;
