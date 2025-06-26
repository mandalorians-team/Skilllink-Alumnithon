import React, { useState } from 'react';
import { FaComments, FaClipboardList, FaChartBar, FaFilter, FaPlus } from 'react-icons/fa';
import ProgressOverviewPanel from './ProgressOverviewPanel';
import StudentFilterPanel from './StudentFilterPanel';
import '../../styles/StudentListPanel.css';

const StudentListPanel = ({ courses }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || null);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('list');
  const [filters, setFilters] = useState({ name: '', progressMin: 0, progressMax: 100 });
  const [showFilters, setShowFilters] = useState(false);

  const selectedCourse = courses.find(course => course.id === selectedCourseId);
  const students = selectedCourse?.enrolled || [];

  const filteredStudents = students.filter(student => {
    const matchSearch = student.name.toLowerCase().includes(search.toLowerCase());
    const matchName = student.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchProgress = student.progress >= filters.progressMin && student.progress <= filters.progressMax;
    return matchSearch && matchName && matchProgress;
  });

  return (
    <div className="student-panel">
      {/* Opcional: Panel de filtros lateral */}
      {showFilters && (
      <StudentFilterPanel
          filters={filters}
          onChange={setFilters}
          onClose={() => setShowFilters(false)}
          onClear={() => {
            setFilters({ name: '', progressMin: 0, progressMax: 100 });
            setShowFilters(false);
          }}
        />
      )}


      {/* Encabezado */}
      <div className="panel-header">
        <h2>Estudiantes en {selectedCourse?.title}</h2>
        <div className="top-actions">
          <div className="filter-group">
            <FaFilter />
            <button onClick={() => setShowFilters(prev => !prev)}></button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === 'list' ? 'active-tab' : ''} onClick={() => setActiveTab('list')}>
          Lista de Estudiantes
        </button>
        <button className={activeTab === 'overview' ? 'active-tab' : ''} onClick={() => setActiveTab('overview')}>
          Progreso General
        </button>
        <button className={activeTab === 'evaluations' ? 'active-tab' : ''} onClick={() => setActiveTab('evaluations')}>
          Administración de Evaluaciones
        </button>
      </div>

      {/* Contenido de pestañas */}
      <div className="tab-content">
        {activeTab === 'list' && (
          <table className="student-table">
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Mentoría</th>
                <th>Progreso</th>
                <th>Ultima Actividad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, idx) => (
                <tr key={idx}>
                  <td className="student-info">
                    <img src={student.avatar} alt={student.name} />
                    <div>
                      <div className="student-name">{student.name}</div>
                      <div className="student-email">{student.email}</div>
                    </div>
                  </td>
                  <td>{selectedCourse.title}</td>
                  <td>
                    <div className="progress-bar">
                      <div className="fill" style={{ width: `${student.progress}%` }} />
                    </div>
                    <span className="progress-percent">{student.progress}%</span>
                  </td>
                  <td>{student.lastActivity}</td>
                  <td className="actions">
                    <FaComments />
                    <FaClipboardList />
                    <FaChartBar />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'overview' && <ProgressOverviewPanel course={selectedCourse} />}

        {activeTab === 'evaluations' && (
          <p style={{ padding: '2rem' }}>Evaluations panel coming soon...</p>
        )}
      </div>
    </div>
  );
};

export default StudentListPanel;
