export default function Dashboard() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Tu Panel</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          Mi Progreso 📈
        </div>
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          Mentorías Activas 🤝
        </div>
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          Desafíos Recomendados 💡
        </div>
      </div>
    </section>
  );
}
