import React from 'react';
import './CourseCard.css';
import onEdit from './onEdit';
const CourseCard = ({
  icon,
  title,
  description,
  students,
  percentage,
  status,
  isActive,
  onToggleActive,
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
      <p className="course-students">{students} Students</p>
      <div className="course-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="progress-text">{percentage}%</span>
      </div>
      {status && <span className="course-status">{status}</span>}
      <button className="edit-btn" onClick={onEdit}>Edit</button>
    </div>
  );
};

export default CourseCard;
