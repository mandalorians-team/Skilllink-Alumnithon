import React from "react";
import Sidebar from "../../components/MentorProfile/SidebarMentor";

import "../../styles/MentorProfilePage.css";
import mentorFoto from "../../assets/imagen/mentor-foto.png"

const MentorProfilePage = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="main">
            <div className="mentor-profile-container">
                <section className="mentor-profile">
                <h2>Perfil del Mentor</h2>
                <div className="profile-card">
                    <div className="left">
                    <img
                        src={mentorFoto}
                        alt="mentor"
                        className="mentor-photo"
                    />
                    <button className="upload-btn">⬆ Cargar nueva foto</button>
                    </div>
                    <div className="right">
                    <label>Nombre</label>
                    <input type="text" value="Gabriel Santos" />

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
