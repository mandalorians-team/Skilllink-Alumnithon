import React, { useState } from 'react';
import '../../styles/ManageEvaluationsPanel.css';

const ManageEvaluationsPanel = ({ course }) => {
  const [evaluations, setEvaluations] = useState(
    course.enrolled.map(student => ({
      studentEmail: student.email,
      feedback: '',
      score: '',
      completed: false,
    }))
  );

  const handleChange = (email, field, value) => {
    setEvaluations(prev =>
      prev.map(evalItem =>
        evalItem.studentEmail === email
          ? { ...evalItem, [field]: value }
          : evalItem
      )
    );
  };

  const toggleCompletion = (email) => {
    setEvaluations(prev =>
      prev.map(evalItem =>
        evalItem.studentEmail === email
          ? { ...evalItem, completed: !evalItem.completed }
          : evalItem
      )
    );
  };

  return (
    <div className="manage-evaluations-panel">
      <h3>Gestión de Evaluaciones - {course.title}</h3>
      <table className="evaluation-table">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Feedback</th>
            <th>Puntaje</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {course.enrolled.map((student) => {
            const evalData = evaluations.find(e => e.studentEmail === student.email);
            return (
              <tr key={student.email}>
                <td>
                  <strong>{student.name}</strong>
                  <div className="email">{student.email}</div>
                </td>
                <td>
                  <textarea
                    value={evalData.feedback}
                    onChange={(e) =>
                      handleChange(student.email, 'feedback', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={evalData.score}
                    onChange={(e) =>
                      handleChange(student.email, 'score', e.target.value)
                    }
                    min="0"
                    max="100"
                  />
                </td>
                <td>
                  <button
                    className={`status-btn ${evalData.completed ? 'completed' : 'pending'}`}
                    onClick={() => toggleCompletion(student.email)}
                  >
                    {evalData.completed ? '✅ Evaluated' : '⏳ Pending'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEvaluationsPanel;
