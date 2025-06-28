import React from 'react';
import '../../styles/StudentFilterPanel.css';

const StudentFilterPanel = ({ filters, onChange, onClose, onClear }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(prev => ({
      ...prev,
      [name]: name.includes('progress') ? parseInt(value) : value,
    }));
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filtrar por estudiante</h3>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="filter-group">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={filters.name}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label>Progreso Min</label>
        <input
          type="number"
          name="progressMin"
          value={filters.progressMin}
          onChange={handleChange}
          min="0"
          max="100"
        />
      </div>

      <div className="filter-group">
        <label>Progreso Max</label>
        <input
          type="number"
          name="progressMax"
          value={filters.progressMax}
          onChange={handleChange}
          min="0"
          max="100"
        />
      </div>

      <div className="filter-actions">
        <button onClick={onClear} className="clear-btn">Clear Filters</button>
        <button onClick={onClose} className="apply-btn">Apply</button>
      </div>
    </div>
  );
};

export default StudentFilterPanel;
