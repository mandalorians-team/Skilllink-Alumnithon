import React, { useRef, useState } from "react";
import Sidebar from "../../components/MentorProfile/SidebarMentor";
import Topbar from "../../components/Topbar";
import "../../styles/MentorProfilePage.css";
import defaultFoto from "../../assets/imagen/mentor-foto.png";

const MentorProfilePage = () => {
  const [skills, setSkills] = useState([
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "API Integration",
    "State Management",
    "Deployment",
  ]);
  const [skillInput, setSkillInput] = useState("");
  const [mentorImage, setMentorImage] = useState(defaultFoto);

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

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Topbar />
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
                  🏅 Cargar nueva foto
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
                <input type="text" value="Gabriel Santos" />

                <label>Email</label>
                <input type="email" value="gabriel.santos@example.com" />

                <label>Biografía</label>
                <textarea rows="4">
                  Experto en ingeniería de software, con grande pasión por la
                  docencia. Desarrollador Web y tecnología cloud. Más de 10
                  años de experiencia en la industria, especialista en React,
                  Next.js, y escalabilidad en soluciones backend.
                </textarea>

                <button className="save-btn">Guardar cambios</button>
              </div>
            </div>
          </section>

          <section className="course-management">
            <h2>Gestión de Cursos</h2>
            <label>Nombre del curso</label>
            <input type="text" value="Mastering React & Next.js" />

            <label>Key Skills (Presione Enter para adicionar)</label>
            <input
              type="text"
              placeholder="e.g., React, AI, Marketing"
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
                    title="Eliminar"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>

            <label>Descripción del Curso</label>
            <textarea rows="4">
              Una amplia comprensión del curso, diseño con React desde
              principiante a Next.js Desarrollador FullStack.
            </textarea>

            <label>Duración del Curso</label>
            <input type="text" value="8 Semanas" />
          </section>

          <div className="mentor-content-section">
            <div className="upload-card">
              <h3>Cargar contenido</h3>
              <button className="upload-box">🎥 Cargar Mentoría</button>
              <button className="upload-box">📝 Cargar Evaluación (PDF)</button>
            </div>

            <div className="stats-card">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Estudiantes inscritos en mis mentorías
              </h3>
            </div>
          </div>

          <button className="publish-btn">Publicar</button>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;
