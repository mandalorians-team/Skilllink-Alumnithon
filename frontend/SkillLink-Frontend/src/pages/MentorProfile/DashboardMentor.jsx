import React, { useState } from 'react';
import CourseCard from '../../components/MentorProfile/CourseCard';
import { FaCode, FaChartLine, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import EditCourseModal from '../../components/MentorProfile/EditCourseModal';


const initialCourses = [
  {
    id: 1,
    title: 'Web Development Basics',
    description: 'Total enrolled students and average progress.',
    students: 120,
    percentage: 85,
    icon: <FaCode />,
    status: null,
    isActive: true,
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Student engagement and pending evaluations.',
    students: 95,
    percentage: 72,
    icon: <FaChartLine />,
    status: null,
    isActive: false,
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Upcoming evaluations and new enrollments.',
    students: 80,
    percentage: 50,
    icon: <FaPaintBrush />,
    status: 'Popular',
    isActive: true,
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Course completion rate and feedback score.',
    students: 65,
    percentage: 90,
    icon: <FaBullhorn />,
    status: null,
    isActive: false,
  },
];


const DashboardMentor = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [editingCourse, setEditingCourse] = useState(null);

  const toggleCourseStatus = (id) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, isActive: !course.isActive } : course
    ));
  };

  const openEditModal = (course) => {
    setEditingCourse(course);
  };

  const closeEditModal = () => {
    setEditingCourse(null);
  };

  const saveCourseChanges = (updatedCourse) => {
    setCourses(courses.map(course =>
      course.id === updatedCourse.id ? updatedCourse : course
    ));
    closeEditModal();
  };

  return (
    <div className="dashboard-mentor" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {courses.map(course => (
        <CourseCard
          key={course.id}
          {...course}
          onToggleActive={() => toggleCourseStatus(course.id)}
          onEdit={() => openEditModal(course)}
        />
      ))}

      {editingCourse && (
        <EditCourseModal
          course={editingCourse}
          onClose={closeEditModal}
          onSave={saveCourseChanges}
        />
      )}
    </div>
  );
};

export default DashboardMentor;
