/**import "../styles/CourseCard.css";**/
import React, { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";

export default function CourseCard({ course, type = "enrolled" }) {
  const [showModal, setShowModal] = useState(false);

  const {
    id,
    title,
    instructor,
    description,
    rating,
    lessonsCompleted,
    totalLessons,
    weeks,
    status,
    image,
  } = course;

  const progressPercentage =
    totalLessons > 0 ? (lessonsCompleted / totalLessons) * 100 : 0;

  const handleInscribirseClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmInscription = () => {
    setShowModal(false);
    // Aquí iría la lógica para inscribir al usuario
    console.log(`Inscripción confirmada para el curso: ${title}`);
  };

  return (
    <>
      <div className="bg-[#2D3748] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full font-sans">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5 text-white flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-400 text-sm">{instructor}</p>
            {status === "en progreso" && (
              <span className="bg-yellow-400 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {status}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

          {type === "enrolled" ? (
            <>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2">{rating}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>
                  {lessonsCompleted}/{totalLessons} Lecciones
                </span>
                <span>{weeks} Semanas</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-1.5 mb-4">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <Link to={`/courses/${id}/content`} className="mt-auto">
                <button className="w-full bg-[#718096] text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
                  Continuar aprendiendo
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2">{rating}</span>
              </div>
              <div className="mt-auto">
                <button
                  onClick={handleInscribirseClick}
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  Inscribirse
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmInscription}
        title="Confirmar inscripción">
        ¿Estás seguro de que deseas inscribirte en <b>{title}</b>?
      </Modal>
    </>
  );
}
