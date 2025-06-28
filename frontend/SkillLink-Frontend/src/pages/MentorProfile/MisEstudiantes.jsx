import React from 'react';
import StudentListPanel from '../../components/MentorProfile/StudentListPanel';
import "../../styles/StudentListPanel.css"


const mockCourses = [
  {
    id: 1,
    title: 'Web Development Basics',
    enrolled: [
      {
        name: 'Ana García',
        email: 'ana@example.com',
        progress: 76,
        lastActivity: '2025-06-22',
        avatar: 'https://i.pravatar.cc/40?img=1',
      },
      {
        name: 'Luis Rodríguez',
        email: 'luis@example.com',
        progress: 52,
        lastActivity: '2025-06-21',
        avatar: 'https://i.pravatar.cc/40?img=2',
      },
      {
        name: 'Sofía Reyes',
        email: 'sofia@example.com',
        progress: 88,
        lastActivity: '2025-06-26',
        avatar: 'https://i.pravatar.cc/40?img=5',
      },
      {
        name: 'Alejandro Cifuentes',
        email: 'alejo@example.com',
        progress: 73,
        lastActivity: '2025-06-15',
        avatar: 'https://i.pravatar.cc/40?img=7',
      },
      {
        name: 'Enrique Morales',
        email: 'enrique@example.com',
        progress: 40,
        lastActivity: '2025-06-22',
        avatar: 'https://i.pravatar.cc/40?img=8',
      }
    ],
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    enrolled: [
      {
        name: 'Carla Mejía',
        email: 'carla@example.com',
        progress: 64,
        lastActivity: '2025-06-25',
        avatar: 'https://i.pravatar.cc/40?img=3',
      },
      {
        name: 'Oscar Montero',
        email: 'oscar@example.com',
        progress: 50,
        lastActivity: '2025-06-19',
        avatar: 'https://i.pravatar.cc/40?img=4',
      },
      {
        name: 'Jesica Suárez',
        email: 'jesica@example.com',
        progress: 95,
        lastActivity: '2025-06-23',
        avatar: 'https://i.pravatar.cc/40?img=3',
      }
    ],
  },
];


const MisEstudiantes = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <StudentListPanel courses={mockCourses} />
    </div>
  );
};

export default MisEstudiantes;
