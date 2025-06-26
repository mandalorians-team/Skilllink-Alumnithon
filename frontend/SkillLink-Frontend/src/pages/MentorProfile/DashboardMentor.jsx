import React, { useState, useRef } from 'react';
import CourseCard from '../../components/MentorProfile/CourseCard';
import SatisfactionChart from '../../components/MentorProfile/SatisfactionChart';
import { FaCode, FaChartLine, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import EditCourseModal from '../../components/MentorProfile/EditCourseModal';
import StudentListPanel from '../../components/MentorProfile/StudentListPanel';
import '../../styles/DashboardMentor.css';

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
    scores: [5, 4, 4, 5, 3, 4, 5, 5, 4],
    enrolled: [
      {
        name: 'Ana García',
        email: 'ana.garcia@example.com',
        progress: 75,
        lastActivity: '2 hours ago',
        avatar: '/avatars/ana.png',
        skills: ['HTML', 'CSS'],
        interests: ['Frontend', 'Design'],
      },
      {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        progress: 100,
        lastActivity: '1 day ago',
        avatar: '/avatars/juan.png',
        skills: ['JavaScript'],
        interests: ['Web', 'Apps'],
      },
      {
        name: 'Sofía Martínez',
        email: 'sofia.martinez@example.com',
        progress: 45,
        lastActivity: '2 days ago',
        avatar: '/avatars/sofia.png',
        skills: ['HTML'],
        interests: ['Accessibility'],
      },
      {
        name: 'Laura Fernández',
        email: 'laura.fernandez@example.com',
        progress: 70,
        lastActivity: '4 hours ago',
        avatar: '/avatars/laura.png',
        skills: ['React'],
        interests: ['Web', 'UI'],
      },
      {
        name: 'Gabriel Morales',
        email: 'gabriel.morales@example.com',
        progress: 38,
        lastActivity: '10 mins ago',
        avatar: '/avatars/gabriel.png',
        skills: ['CSS'],
        interests: ['Design'],
      },
    ],
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
    scores: [4, 4, 3, 5, 4, 4, 3],
    enrolled: [],
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
    scores: [5, 5, 5, 4, 4, 5, 5],
    enrolled: [],
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
    scores: [3, 2, 4, 3, 3, 4],
    enrolled: [],
  },
];

const DashboardMentor = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [editingCourse, setEditingCourse] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourses[0].id);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    skills: '',
    interests: '',
    progressMin: 0,
    progressMax: 100,
  });

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  const toggleCourseStatus = (id) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, isActive: !course.isActive } : course
    ));
  };

  const openEditModal = (course) => setEditingCourse(course);
  const closeEditModal = () => setEditingCourse(null);
  const saveCourseChanges = (updatedCourse) => {
    setCourses(courses.map(course =>
      course.id === updatedCourse.id ? updatedCourse : course
    ));
    closeEditModal();
  };

  return (
    <>
    <div className="dashboardMentor-container">
        <div className="carousel-container">
        <h1>Mis Mentorías</h1>
          <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>

          <div className="dashboard-mentor" ref={scrollRef}>
            {courses.map(course => (
              <div className="course-wrapper" key={course.id}>
                <CourseCard
                  {...course}
                  onToggleActive={() => toggleCourseStatus(course.id)}
                  onEdit={() => openEditModal(course)}
                />
                <SatisfactionChart scores={course.scores} />
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
        </div>

        {editingCourse && (
          <EditCourseModal
            course={editingCourse}
            onClose={closeEditModal}
            onSave={saveCourseChanges}
          />
        )}


        <StudentListPanel
          courses={courses}
          selectedCourseId={selectedCourseId}
          onTabChange={setSelectedCourseId}
          filters={filters}
        />
    </div>
    </>
  );
};

export default DashboardMentor;
