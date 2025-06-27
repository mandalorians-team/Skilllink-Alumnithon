import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import '../../styles/SatisfactionChart.css';

const SatisfactionChart = ({ scores = [] }) => {
  const [chartType, setChartType] = useState('Bar');
  const [color, setColor] = useState('#8884d8');

  const totalStudents = scores.length;
  const average = totalStudents > 0
    ? (scores.reduce((sum, s) => sum + s, 0) / totalStudents).toFixed(2)
    : 0;

  const counts = scores.reduce((acc, score) => {
    acc[score] = (acc[score] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts).map(([score, value]) => ({
    name: `Puntaje ${score}`,
    value
  }));

  const renderChart = () => {
    switch (chartType) {
      case 'Pie':
        return (
          <PieChart width={400} height={250}>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      case 'Line':
        return (
          <LineChart width={450} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={color} />
          </LineChart>
        );
      default:
        return (
          <BarChart width={450} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={color} />
          </BarChart>
        );
    }
  };

  return (
    <div className="satisfaction-chart">
      <div className="chart-controls">
        <label>
          Tipo de gráfico:
            <select value={chartType} onChange={(e) => setChartType(e.target.value)}
              style={{ marginLeft: '10px' }}>
              <option value="Bar">Barras</option>
              <option value="Pie">Torta</option>
              <option value="Line">Línea</option>
            </select>
        </label>
        <label>
          Color: 
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}
              style={{ marginLeft: '10px' }}/>
        </label>
      </div>

      {renderChart()}

      <div className="chart-summary">
        <p>Total de estudiantes: <strong>{totalStudents}</strong></p>
        <p>Media de satisfacción: <strong>{average}</strong></p>
      </div>
    </div>
  );
};

export default SatisfactionChart;
