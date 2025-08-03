# 🚀 SkillLink Frontend

**SkillLink** es una plataforma educativa innovadora que conecta a estudiantes con mentores expertos mediante un ecosistema completo de aprendizaje. Nuestra plataforma ofrece cursos interactivos, mentorías personalizadas y proyectos colaborativos que fomentan el desarrollo de habilidades técnicas y profesionales.

Este repositorio contiene la implementación del frontend de la aplicación, desarrollada con tecnologías modernas y un enfoque modular para garantizar escalabilidad y mantenibilidad.

---

## ✨ Características

### 🎓 **Aprendizaje Personalizado**

- Cursos interactivos con contenido multimedia
- Mentorías 1:1 con expertos en diferentes campos
- Sistema de seguimiento de progreso individual
- Evaluaciones y certificaciones

### 👥 **Comunidad y Colaboración**

- Proyectos colaborativos entre estudiantes
- Sistema de chat en tiempo real
- Foros de discusión por curso
- Networking con mentores y compañeros

### 🛠️ **Herramientas Avanzadas**

- Dashboard personalizado para estudiantes y mentores
- Sistema de búsqueda y filtros inteligentes
- Notificaciones en tiempo real
- Sistema de calificaciones y feedback

### 📱 **Experiencia de Usuario**

- Diseño responsive para todos los dispositivos
- Interfaz intuitiva y moderna
- Navegación fluida entre secciones
- Accesibilidad mejorada

---

## 🛠️ Tecnologías Utilizadas

### **Frontend Principal**

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo moderno
- **Tailwind CSS** - Framework CSS utility-first para diseño responsive
- **React Router** - Enrutamiento declarativo para aplicaciones React

### **Estado y Gestión de Datos**

- **Context API** - Gestión de estado global de la aplicación
- **Custom Hooks** - Lógica reutilizable y separación de responsabilidades
- **Fetch API** - Comunicación con el backend

### **Herramientas de Desarrollo**

- **ESLint** - Linting de código JavaScript/JSX
- **Prettier** - Formateo automático de código
- **Jest** - Framework de testing para pruebas unitarias

### **Librerías Adicionales**

- **React Icons** - Iconografía consistente
- **Axios** - Cliente HTTP para peticiones al backend
- **Socket.io** - Comunicación en tiempo real para chat

---

## 📦 Instalación

### **Prerrequisitos**

- Node.js (versión 16 o superior)
- npm o yarn como gestor de paquetes
- Git para clonar el repositorio

### **Pasos de Instalación**

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/Skilllink-Alumnithon.git
   cd Skilllink-Alumnithon/frontend/SkillLink-Frontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**

   ```bash
   # Crear archivo .env en la raíz del proyecto
   cp .env.example .env
   ```

   Editar el archivo `.env` con las siguientes variables:

   ```env

   VITE_API_URL=http://localhost:8080/api
   VITE_WS_URL=ws://localhost:8080/ws
   VITE_APP_NAME=SkillLink
   ```

4. **Verificar instalación**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

---

## 🚀 Uso

### **Desarrollo Local**

1. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev



   La aplicación estará disponible en `http://localhost:5173`

2. **Construir para producción**

   ```bash
   npm run build
   ```

3. **Previsualizar build de producción**

   ```bash
   npm run preview
   ```

### **Scripts Disponibles**

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza el build de producción
npm run lint         # Ejecuta ESLint para verificar código
npm run test         # Ejecuta pruebas unitarias
npm run test:watch   # Ejecuta pruebas en modo watch
```

### **Estructura de Navegación**

- **Landing Page** - Página principal con información de la plataforma
- **Login/Registro** - Autenticación de usuarios
- **Dashboard Estudiante** - Panel principal para estudiantes
- **Dashboard Mentor** - Panel principal para mentores
- **Cursos** - Exploración y gestión de cursos
- **Mentorías** - Sistema de mentorías y sesiones
- **Proyectos** - Gestión de proyectos colaborativos
- **Chat** - Comunicación en tiempo real

---

## 📁 Estructura del proyecto

```bash
src/
│
├── assets/                  # Imágenes y logotipos
│   ├── icons/              # Iconos SVG
│   ├── imagen/             # Imágenes de perfil
│   └── img/                # Imágenes generales
│
├── components/             # Componentes reutilizables organizados por dominio
│   ├── Aprendiz/           # Componentes específicos del estudiante
│   │   ├── Curso/          # Tarjetas, encabezados, tabs, módulos
│   │   ├── Mentorías/      # Historial, estadísticas, sesiones
│   │   └── Proyectos/      # Tarjetas de proyectos y filtros
│   ├── chat/               # Componentes de chat en tiempo real
│   ├── comun/              # Header, Footer y componentes generales
│   ├── MentorProfile/      # Componentes del perfil de mentor
│   └── ui/                 # Botones, Inputs, Modales, componentes base
│
├── context/                # Context API para estado global
│   ├── AuthContext.jsx     # Contexto de autenticación
│   └── AuthContextHelpers.js
│
├── data/                   # Datos de prueba y mocks
│   ├── alumnoData.js       # Datos de estudiantes
│   └── mentoriasData.js    # Datos de mentorías
│
├── hooks/                  # Custom hooks reutilizables
│   ├── useApi.js           # Hook para llamadas a API
│   ├── useAuth.js          # Hook para autenticación
│   └── useChatSocket.jsx   # Hook para WebSocket
│
├── interfaces/             # Tipos TypeScript para datos del backend
│   ├── ICertificate.ts     # Interfaz para certificados
│   ├── ICourseEnrollment.ts # Interfaz para inscripciones
│   └── ILesson.ts          # Interfaz para lecciones
│
├── pages/                  # Páginas principales del sistema
│   ├── Aprendiz/           # Páginas específicas del estudiante
│   ├── MentorProfile/      # Páginas del perfil de mentor
│   ├── Login/              # Páginas de autenticación
│   └── Register/           # Páginas de registro
│
├── routes/                 # Configuración de rutas
│   ├── AppRoutes.jsx       # Rutas principales
│   └── CouserRoutes.jsx    # Rutas específicas de cursos
│
├── services/               # Servicios y conexiones al backend
│   ├── api.js              # Configuración base de API
│   └── BackendServices.js  # Servicios específicos del backend
│
├── styles/                 # Estilos CSS específicos por componente
│   ├── ChatPage.css        # Estilos del chat
│   └── CourseCard.css      # Estilos de tarjetas de curso
│
├── tests/                  # Pruebas unitarias
│   ├── ProyectsCard.test.jsx
│   └── setup.js
│
├── main.jsx                # Punto de entrada de la aplicación
└── App.jsx                 # Componente raíz de la aplicación
```

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### **Guías de Contribución**

- Sigue las convenciones de nomenclatura establecidas
- Asegúrate de que todas las pruebas pasen
- Documenta cualquier nueva funcionalidad
- Mantén el código limpio y legible

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📞 Contacto

- **Equipo de Desarrollo** - [email@skilllink.com](mailto:email@skilllink.com)
- **Soporte Técnico** - [soporte@skilllink.com](mailto:soporte@skilllink.com)
- **Documentación** - [docs.skilllink.com](https://docs.skilllink.com)

---

## 🙏 Agradecimientos

- A todos los mentores que contribuyen con su conocimiento
- A la comunidad de estudiantes que hace crecer la plataforma
- A los desarrolladores que mantienen y mejoran el código
