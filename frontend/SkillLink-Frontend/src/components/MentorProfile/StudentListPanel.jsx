import React, { useState } from 'react';
import { FaComments, FaClipboardList, FaChartBar, FaFilter, FaPlus } from 'react-icons/fa';
import '../../styles/StudentListPanel.css';

const StudentListPanel = ({ courses }) => {
  const [selectedCourseId] = useState(courses[0]?.id || null);
  const [search, setSearch] = useState('');

  const selectedCourse = courses.find(course => course.id === selectedCourseId);
  const students = selectedCourse?.enrolled || [];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-panel">
      <div className="panel-header">
        <h2>Students in {selectedCourse?.title}</h2>
        <div className="top-actions">
          <div className="filter-group">
            <FaFilter />
            <button>Filter</button>
          </div>
          <button className="add-student-btn">
            <FaPlus /> Add Student
          </button>
        </div>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="tabs">
          <button className="active-tab">Students List</button>
          <button>Progress Overview</button>
          <button>Manage Evaluations</button>
        </div>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Mentorship</th>
            <th>Progress</th>
            <th>Last Activity</th>
            <th>Actions</th>
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
    </div>
  );
};

export default StudentListPanel;
