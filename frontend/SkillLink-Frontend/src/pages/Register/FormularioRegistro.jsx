import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Main/Navbar';
import Footer from '../../components/Main/Footer';
import { API_URL } from '@/services/api';


const paises = [
  "Colombia", "Argentina", "México", "Chile", "Perú", "España", "Estados Unidos", "Canadá", "Brasil", "Uruguay"
];

const habilidadesIT = [
  "Desarrollo Web", "Desarrollo Móvil", "Ciberseguridad", "DevOps", "Base de Datos",
  "Diseño UX/UI", "Machine Learning", "Cloud Computing", "Análisis de Datos", "Backend", "Frontend"
];

const intereses = [
  "Proyectos colaborativos", "Mentoría", "Hackathons", "Retos semanales", "Charlas técnicas", "Networking"
];

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: '',
    telefono: '',
    pais: '',
    habilidades: [],
    intereses: [],
    idioma: 'es',
    suscripcion: false,
    aceptoTerminos: false,
    rol: ''
  });

  const [errores, setErrores] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.clientHeight);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name !== 'suscripcion' && name !== 'aceptoTerminos') {
      const newArray = formData[name].includes(value)
        ? formData[name].filter((item) => item !== value)
        : [...formData[name], value];
      setFormData({ ...formData, [name]: newArray });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formData.rol) nuevosErrores.rol = 'Selecciona un rol';
    if (!formData.nombres) nuevosErrores.nombres = 'Campo requerido';
    if (!formData.apellidos) nuevosErrores.apellidos = 'Campo requerido';
    if (!formData.correo) nuevosErrores.correo = 'Campo requerido';
    if (!formData.contraseña) nuevosErrores.contraseña = 'Campo requerido';
    if (formData.contraseña !== formData.confirmarContraseña)
      nuevosErrores.confirmarContraseña = 'Las contraseñas no coinciden';
    if (!formData.pais) nuevosErrores.pais = 'Selecciona un país';
    if (!formData.aceptoTerminos) nuevosErrores.aceptoTerminos = 'Debes aceptar los términos';
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidados = validar();
    if (Object.keys(erroresValidados).length > 0) {
      setErrores(erroresValidados);
    } else {
      setErrores({});
      setIsLoading(true);

      const payload = {
        username: formData.nombres,
        password: formData.contraseña,
        email: formData.correo,
        role: formData.rol === "Mentor" ? "MENTOR" : formData.rol === "Estudiante" ? "LEARNER" : "",
        firstName: formData.nombres,
        lastName: formData.apellidos,
        photoUrl: "photoUrl",
        bio: "bio",
        experience: "experience",
        education: "education",
        linkedinProfile: "linkedinprofile"
      };

      try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        console.log(response);

        if (response.ok) {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            // ✅ Redirección según rol
            if (formData.rol === "Mentor") {
              navigate('/login');
            } else if (formData.rol === "Estudiante") {
              navigate('/login');
            }
          }, 3000);

          setFormData({
            nombres: '',
            apellidos: '',
            correo: '',
            contraseña: '',
            confirmarContraseña: '',
            telefono: '',
            pais: '',
            habilidades: [],
            intereses: [],
            idioma: 'es',
            suscripcion: false,
            aceptoTerminos: false,
            rol: ''
          });
        } else {
          const errorData = await response.json();
          alert(
            errorData.message ||
            "Error en el registro. Verifica los datos ingresados o intenta más tarde."
          );
        }
      } catch (err) {
        alert("Error de conexión con el servidor.");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#B8CFDF]">
      <Navbar />
      <main className="flex-grow flex justify-center items-start px-4 py-8 pt-20">
        <div className="flex w-full max-w-6xl gap-4 items-stretch">
          <div className="hidden md:flex">
            <img
              src="/images/mandalorian2.jpg"
              alt="Decoración izquierda"
              style={{ height: formHeight }}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div
            ref={formRef}
            className="bg-[#19191F] text-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl border border-white/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#799EB8] mb-6 text-center">Registro en SkillLink</h2>

            <div className="flex justify-center mb-4 gap-4">
              {["Estudiante", "Mentor"].map((rol) => (
                <button
                  key={rol}
                  type="button"
                  onClick={() => setFormData({ ...formData, rol })}
                  className={`py-1 px-3 rounded ${
                    formData.rol === rol
                      ? "bg-[#799EB8] text-white"
                      : "bg-white/10 text-white border border-white/20"
                  } transition duration-300`}
                >
                  {rol}
                </button>
              ))}
            </div>
            {errores.rol && <p className="text-red-400 text-sm text-center mb-2">{errores.rol}</p>}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'nombres', label: 'Nombres' },
                { name: 'apellidos', label: 'Apellidos' },
                { name: 'correo', label: 'Correo electrónico', type: 'email' },
                { name: 'telefono', label: 'Teléfono', type: 'tel' },
                { name: 'contraseña', label: 'Contraseña', type: 'password' },
                { name: 'confirmarContraseña', label: 'Confirmar contraseña', type: 'password' },
              ].map(({ name, label, type = 'text' }) => (
                <div key={name}>
                  <label>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={`Ingresa ${label.toLowerCase()}`}
                    className="w-full p-2 rounded bg-white/10 text-white border border-white/20 focus:border-[#799EB8] focus:ring-2 focus:ring-[#799EB8]"
                  />
                  {errores[name] && <p className="text-red-400 text-sm">{errores[name]}</p>}
                </div>
              ))}

              <div>
                <label>País</label>
                <select
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black text-white"
                >
                  <option value="">Selecciona un país</option>
                  {paises.map((pais) => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
                {errores.pais && <p className="text-red-400 text-sm">{errores.pais}</p>}
              </div>

              <div>
                <label>Idioma</label>
                <select
                  name="idioma"
                  value={formData.idioma}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black text-white"
                >
                  <option value="es">Español</option>
                  <option value="en">Inglés</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label>Habilidades</label>
                <div className="flex flex-wrap gap-2">
                  {habilidadesIT.map((h) => (
                    <label key={h} className="flex items-center gap-1">
                      <input type="checkbox" name="habilidades" value={h} onChange={handleChange} />
                      {h}
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label>Intereses</label>
                <div className="flex flex-wrap gap-2">
                  {intereses.map((i) => (
                    <label key={i} className="flex items-center gap-1">
                      <input type="checkbox" name="intereses" value={i} onChange={handleChange} />
                      {i}
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="suscripcion" onChange={handleChange} /> Suscribirme al boletín
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="aceptoTerminos" onChange={handleChange} /> Acepto los términos y condiciones
                </label>
                {errores.aceptoTerminos && <p className="text-red-400 text-sm">{errores.aceptoTerminos}</p>}
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-[#799EB8] to-[#678a9d] text-white font-bold py-2 px-4 rounded hover:scale-105 transition"
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </button>
            </form>
          </div>

          <div className="hidden md:flex">
            <img
              src="/images/mandalorian2.jpg"
              alt="Decoración derecha"
              style={{ height: formHeight }}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 shadow-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">✅ Registro exitoso</h3>
            <p className="mb-4">¡Gracias por unirte a SkillLink!</p>
            <button onClick={() => setShowPopup(false)} className="bg-[#799EB8] text-white px-4 py-2 rounded">OK</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FormularioRegistro;
