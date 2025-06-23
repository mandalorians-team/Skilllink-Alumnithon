export default function TestimonioCard({ img, nombre, perfil, comentario }) {
  return (
    <div className="bg-[#19191F] text-white rounded-xl p-5 w-[300px] shadow-md hover:shadow-xl hover:brightness-105 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={img}
          alt={`Foto de ${nombre}`}
          className="w-14 h-14 object-cover rounded-full"
        />
        <div>
          <h3 className="text-base font-bold">{nombre}</h3>
          <p className="text-sm text-gray-300">{perfil}</p>
        </div>
      </div>
      <p className="text-sm italic text-gray-100 leading-relaxed">
        “{comentario}”
      </p>
    </div>
  );
}
