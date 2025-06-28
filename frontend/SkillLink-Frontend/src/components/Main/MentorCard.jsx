export default function MentorCard({ img, nombre, cargo, bio }) {
  return (
    <div className="relative flex flex-col items-center w-[240px]">
      <img
        src={img}
        alt={`Mentor ${nombre}`}
        className="w-20 h-20 object-cover rounded-full shadow-lg absolute -top-10 z-10 border-4 border-[#19191F]"
      />
      <div className="bg-[#19191F] text-white rounded-xl pt-12 pb-4 px-4 shadow-md hover:shadow-xl hover:brightness-110 transition-all text-center min-h-[260px] flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold mb-1 font-audiowide">{nombre}</h3>
          <p className="text-xs text-gray-300 mb-1">{cargo}</p>
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{bio}</p>
        </div>
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-md font-semibold transition">
          Ver Perfil
        </button>
      </div>
    </div>
  );
}
