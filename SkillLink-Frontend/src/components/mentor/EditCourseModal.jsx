// src/components/EditCourseModal.jsx
import React, { useState } from 'react';
import './EditCourseModal.css';

const EditCourseModal = ({ course, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...course });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'students' || name === 'percentage' ? Number(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Course</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <label>Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label>Description:
            <input type="text" name="description" value={formData.description} onChange={handleChange} />
          </label>
          <label>Students:
            <input type="number" name="students" value={formData.students} onChange={handleChange} />
          </label>
          <label>Progress (%):
            <input type="number" name="percentage" value={formData.percentage} onChange={handleChange} min="0" max="100" />
          </label>
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseModal;
