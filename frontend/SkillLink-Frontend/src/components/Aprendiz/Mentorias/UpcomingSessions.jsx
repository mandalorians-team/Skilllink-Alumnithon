import React from "react";

const SessionCard = ({ theme, date, image }) => (
  <div className="bg-gray-800 p-4 rounded-lg text-white shadow-lg">
    <img
      src={image}
      alt={theme}
      className="w-full h-32 object-cover rounded-md mb-4"
    />
    <h4 className="font-bold">{theme}</h4>
    <p className="text-sm text-gray-400 mb-4">Fecha: {date}</p>
    <button className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition-colors">
      Ver Detalles
    </button>
  </div>
);

export default function UpcomingSessions({ sessions }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Próximas Sesiones
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <SessionCard key={session.theme} {...session} />
        ))}
      </div>
    </div>
  );
}
