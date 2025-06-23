import { useNavigate } from "react-router-dom";

export default function CourseCard({ img, titulo, autor, descripcion, id }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#19191F] rounded-xl shadow-md w-[300px] p-5 text-left text-white hover:shadow-xl hover:brightness-105 transition-all">
      <img
        src={img}
        alt={titulo}
        className="w-full h-[160px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold mb-1">{titulo}</h3>
      <p className="text-xs text-gray-300 mb-1 font-medium">{autor}</p>
      <p className="text-sm text-gray-400 mb-4">{descripcion}</p>
      <button
        onClick={() => navigate(`/login`)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded-md font-semibold transition-all">
        Aprende más
      </button>
    </div>
  );
}
