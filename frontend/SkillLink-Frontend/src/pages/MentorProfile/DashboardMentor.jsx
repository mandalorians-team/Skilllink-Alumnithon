import React, { useState, useRef, useEffect } from 'react';
import CourseCard from '../../components/MentorProfile/CourseCard';
import SatisfactionChart from '../../components/MentorProfile/SatisfactionChart';
import { FaCode, FaChartLine, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import EditCourseModal from '../../components/MentorProfile/EditCourseModal';
import '../../styles/DashboardMentor.css';


const iconList = [<FaCode />, <FaChartLine />, <FaPaintBrush />, <FaBullhorn />];

const initialCourses = [
  {
    id: 1,
    title: 'Web Development Basics',
    description: 'Total estudiantes inscritos y progreso.',
    students: 120,
    percentage: 85,
    icon: <FaCode />,
    status: null,
    isActive: true,
    scores: [5, 4, 4, 5, 3, 4, 5, 5, 4],
    enrolled: [
      { name: 'Nicolás Ortiz' },
      { name: 'Alejandra Thomas' },
      { name: 'Miguel Pérez' },
      { name: 'Angel Henao' },
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
];

const DashboardMentor = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const scrollRef = useRef(null);

  // Carga cursos de localStorage solo una vez
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('mentorCourses') || '[]');

    const filtered = storedCourses.filter(sc => {
      return !initialCourses.some(ic => ic.title === sc.title);
    });

    const enriched = filtered.map((course, index) => ({
      ...course,
      id: initialCourses.length + index + 1,
      icon: iconList[index % iconList.length],
      students: 0,
      percentage: 0,
      scores: [],
      enrolled: [],
      isActive: false,
    }));

    setCourses(prev => [...prev, ...enriched]);
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -400 : 400,
      behavior: 'smooth',
    });
  };

  const toggleCourseStatus = (id) => {
    setCourses(courses.map(c =>
      c.id === id ? { ...c, isActive: !c.isActive } : c
    ));
  };

  const openEditModal = (course) => setEditingCourse(course);
  const closeEditModal = () => setEditingCourse(null);
  const saveCourseChanges = (updated) => {
    setCourses(courses.map(c => c.id === updated.id ? updated : c));
    closeEditModal();
  };

  const handleDeleteCourse = (course) => {
    setCourseToDelete(course);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!courseToDelete) return;

    if (courseToDelete.enrolled && courseToDelete.enrolled.length > 0) {
      alert("No puedes eliminar una mentoría que tiene estudiantes inscritos.");
    } else {
      setCourses(courses.filter(c => c.id !== courseToDelete.id));

      // También lo eliminamos de localStorage
      const stored = JSON.parse(localStorage.getItem('mentorCourses') || '[]');
      const updated = stored.filter(c => c.title !== courseToDelete.title);
      localStorage.setItem('mentorCourses', JSON.stringify(updated));
    }

    setShowDeleteModal(false);
    setCourseToDelete(null);
  };

  return (
    <div className="dashboardMentor-container">
      <div className="carousel-container">
        <h1>Mis Mentorías</h1>
        <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>

        <div className="dashboard-mentor" ref={scrollRef}>
          {courses.map(course => (
            <div className="course-wrapper" key={course.id}>
              <CourseCard
                course={course}
                onToggleActive={() => toggleCourseStatus(course.id)}
                onEdit={() => openEditModal(course)}
                onDelete={() => handleDeleteCourse(course)}
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

      {/* Modal de confirmación de borrado */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>¿Deseas eliminar la mentoría "{courseToDelete.title}"?</h2>
            <p>Esta acción no se puede deshacer.</p>
            <div className="modal-buttons">
              <button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
              <button className="confirm" onClick={confirmDelete}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardMentor;
