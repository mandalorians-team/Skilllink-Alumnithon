# 🧑‍🏫 Skilllink - Página del Mentor

<div align="left">
    <img src="https://img.shields.io/badge/JavaScript-FEFF01?logo=javascript&logoColor=000000&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/HTML-EC6231?logo=html5&logoColor=FFFFFF&style=for-the-badge" />
    <img src="https://img.shields.io/badge/CSS-01A3D8?logo=css3&logoColor=FFFFFF&style=for-the-badge" />
    <img src="https://img.shields.io/badge/Node.js-08AC0A?logo=node.js&logoColor=000000&style=for-the-badge" />
    <img src="https://img.shields.io/badge/OpenAI-98d4bc?logo=openai&logoColor=000000&style=for-the-badge" />
    <img src="https://img.shields.io/badge/React-61dbfb?logo=react&logoColor=000000&style=for-the-badge" />

</div>


Este módulo forma parte del proyecto **Skilllink**, una plataforma que conecta estudiantes con mentores especializados. Esta sección está dedicada al **panel del mentor**, permitiéndole gestionar sus cursos y comunicarse directamente con estudiantes mediante un sistema de mensajería en tiempo real.

---

## 📌 Funcionalidades implementadas

### 1. Dashboard del Mentor
- Visualización de mentorías o cursos en formato de tarjetas.
- Estado de cada curso: **Activo** / **Inactivo** con botón para alternar.
- Opción para **eliminar cursos**, con validación:
  - No se puede eliminar si el curso tiene estudiantes inscritos.
  - Modal de confirmación antes de eliminar.

### 2. Chat en tiempo real
- Sistema de mensajería entre mentor y estudiantes.
- Lista de contactos con contador de mensajes no leídos.
- Notificaciones con ícono personalizado al recibir un nuevo mensaje.
- Scroll automático dentro del área de chat (sin afectar el scroll global).

### 3. Diseño e Interacción
- Diseño adaptable con componentes reutilizables (`CourseCard`, `ChatBox`, etc).
- Animaciones y estilos visuales para mejorar la experiencia del usuario.
- Estados visuales activos/inactivos, resaltado de nuevos mensajes.

---

## 🧱 Estructura del Proyecto

```bash
src/
├── App.jsx
├── AppRoutes.jsx
├── main.jsx
├── index.css

├── assets/               # Imágenes y recursos estáticos
│   └── icons/
│   └── logos/

├── pages/                # Páginas principales
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── MentorDashboard.jsx

├── components/           # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── MentorProfile/
│       ├── DashboardMentor.jsx
│       ├── CourseCard.jsx
│       ├── ChatBox.jsx
│       └── ContactList.jsx

├── layouts/              # Layouts generales
│   ├── MainLayout.jsx
│   └── MentorLayout.jsx

├── hooks/                # Hooks personalizados
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useScrollLock.js

├── routes/               # Definición de rutas privadas/públicas
│   ├── PrivateRoute.jsx
│   └── MentorRoutes.jsx

├── ws-test/              # Pruebas WebSocket / Sockets
│   ├── socket-client.js
│   └── TestSocket.jsx




*Alejandra Toloza*
