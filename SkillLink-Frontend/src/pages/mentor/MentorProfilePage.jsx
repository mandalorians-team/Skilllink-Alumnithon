import React from "react";
import Sidebar from "../../components/mentor/SidebarMentor";
import Topbar from "../../components/Topbar";
import "../styles/MentorProfilePage.css";

const MentorProfilePage = () => {
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
                    <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="mentor"
                        className="mentor-photo"
                    />
                    <button className="upload-btn">⬆ Cargar nueva foto</button>
                    </div>
                    <div className="right">
                    <label>Nombre</label>
                    <input type="text" value="Gabriel Santos" />

                    <label>Email</label>
                    <input type="email" value="gabriel.santos@example.com" />

                    <label>Biografía</label>
                    <textarea rows="4">
                        Experto en ingeniería de software, con grande pasión por la docencia.
                        Desarrollador Web and tecnología cloud. Más de 10 años de experiencia en la industria,
                        especialista en React, Next.js, y escalabilidad en soluciones backend.
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
                <input type="text" placeholder="e.g., React, AI, Marketing" />

                <div className="skill-tags">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>TailwindCSS</span>
                    <span>API Integration</span>
                    <span>State Management</span>
                    <span>Deployment</span>
                </div>

                <label>Descripción del Curso</label>
                <textarea rows="4">
                    Una amplia comprensión del curso, diseño con React desde principiante a Next.js Desarrollador FullStack.
                </textarea>

                <label>Duración del Curso
                </label>
                <input type="text" value="8 Semanas" />

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

                <button className="publish-btn">Publicar</button>

            </div>
            </div>
        </div>
    );
};

export default MentorProfilePage;

