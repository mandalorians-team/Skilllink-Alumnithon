import React, { useRef, useState } from "react";
import Sidebar from "../../components/MentorProfile/SidebarMentor";
import "../../styles/MentorProfilePage.css";
import defaultFoto from "../../assets/imagen/mentor-foto.png";

const MentorProfilePage = () => {
  const [mentorImage, setMentorImage] = useState(defaultFoto);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");

  const [showModal, setShowModal] = useState(false);

  const fileInputRef = useRef(null);

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault();
      const newSkill = skillInput.trim();
      if (!skills.includes(newSkill)) {
        setSkills([...skills, newSkill]);
      }
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setMentorImage(imageURL);
    }
  };

  const handlePublish = () => {
    setShowModal(true); // Solo muestra el modal, no guarda nada aún
  };

  const confirmPublish = () => {
    const newCourse = {
      title: courseName,
      description: courseDescription,
      duration: courseDuration,
      skills: skills,
    };

    const existingCourses = JSON.parse(localStorage.getItem("mentorCourses")) || [];
    const updatedCourses = [...existingCourses, newCourse];
    localStorage.setItem("mentorCourses", JSON.stringify(updatedCourses));

    alert("¡Curso publicado con éxito!");

    // Resetear campos
    setCourseName("");
    setCourseDescription("");
    setCourseDuration("");
    setSkills([]);

    setShowModal(false);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <div className="mentor-profile-container">
          <section className="mentor-profile">
            <h2>Perfil del Mentor</h2>
            <div className="profile-card">
              <div className="left">
                <img src={mentorImage} alt="mentor" className="mentor-photo" />
                <button
                  className="upload-btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  ⬆ Cargar nueva foto
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="right">
                <label>Nombre</label>
                <input type="text" value="Gabriel Santos" readOnly />

                <label>Email</label>
                <input type="email" value="gabriel.santos@example.com" readOnly />

                <label>Biografía</label>
                <textarea rows="4" readOnly>
                  Experto en ingeniería de software, con grande pasión por la
                  docencia. Desarrollador Web y tecnología cloud. Más de 10 años
                  de experiencia en la industria, especialista en React, Next.js y
                  escalabilidad en soluciones backend.
                </textarea>

                <button className="save-btn">Guardar cambios</button>
              </div>
            </div>
          </section>

          <section className="course-management">
            <h2>Gestión de Cursos</h2>

            <label>Nombre del curso</label>
            <input
              type="text"
              placeholder="Ingrese el nombre del curso"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />

            <label>Key Skills (Presione Enter para adicionar)</label>
            <input
              type="text"
              placeholder="Ej: React, AI, Marketing"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillKeyDown}
            />

            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                  <button
                    type="button"
                    className="remove-tag-btn"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>

            <label>Descripción del Curso</label>
            <textarea
              rows="4"
              placeholder="Describe el contenido y objetivos del curso"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            />

            <label>Duración del Curso</label>
            <input
              type="text"
              placeholder="Ej: 8 semanas"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
            />
          </section>

          <div className="mentor-content-section">
            <div className="upload-card">
              <h3>Cargar contenido</h3>
              <button className="upload-box">🎥 Upload Video Lecture</button>
              <button className="upload-box">📄 Upload PDF Attachments</button>
            </div>

            <div className="stats-card">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Estudiantes inscritos en mis mentorías
              </h3>
            </div>
          </div>

          <button className="publish-btn" onClick={handlePublish}>
            Publicar
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>¿Estás seguro de que deseas publicar el curso {courseName}?</h2>
            <p>
              Verifica que toda la información sea correcta antes de publicar tu
              mentoría.
            </p>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Volver a editar</button>
              <button className="confirm" onClick={confirmPublish}>
                Confirmar publicación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorProfilePage;

