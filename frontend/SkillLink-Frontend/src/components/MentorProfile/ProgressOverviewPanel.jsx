import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import '../../styles/ProgressOverviewPanel.css';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressOverviewPanel = ({ course }) => {
  const students = course?.enrolled || [];

  const progressData = students.map(s => s.progress);
  const avgProgress = Math.round(progressData.reduce((a, b) => a + b, 0) / progressData.length || 0);

  const barChartData = {
    labels: students.map(s => s.name),
    datasets: [{
      label: 'Progress %',
      data: progressData,
      backgroundColor: '#4a90e2',
    }]
  };

  const doughnutChartData = {
    labels: ['<50%', '50-80%', '80-100%'],
    datasets: [{
      data: [
        students.filter(s => s.progress < 50).length,
        students.filter(s => s.progress >= 50 && s.progress < 80).length,
        students.filter(s => s.progress >= 80).length
      ],
      backgroundColor: ['#f87171', '#fbbf24', '#34d399'],
      hoverOffset: 4
    }]
  };

  return (
    <div className="progress-overview-panel">
      <h2>Progreso General – {course?.title}</h2>

      <div className="stats-summary">
        <div className="stat-card">
          <h3>{avgProgress}%</h3>
          <p>Average Progress</p>
        </div>
        <div className="stat-card">
          <h3>{students.length}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>{students.filter(s => s.progress === 100).length}</h3>
          <p>Completed</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="doughnut-chart">
          <Doughnut data={doughnutChartData} />
        </div>
      </div>
    </div>
  );
};

export default ProgressOverviewPanel;
