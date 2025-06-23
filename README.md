<h1>ALUMNITHON 2025</h1>
<h2>DESARROLLO DE PANTALLAS (MENTOR, CHAT, ERROR 404)</h2>

_Este proyecto fue elaborado con🥇_

<div align="left">
    <img src="https://img.shields.io/badge/REACT-61dbfb?logo=react&logoColor=FFFFFF&style=for-the-badge" />
    <img src="https://img.shields.io/badge/CSS-01A3D8?logo=css3&logoColor=FFFFFF&style=for-the-badge" />
    <img src="https://img.shields.io/badge/Node.js-08AC0A?logo=node.js&logoColor=000000&style=for-the-badge" />
    <img src="https://img.shields.io/badge/JavaScript-FEFF01?logo=javascript&logoColor=000000&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/OpenAI-98d4bc?logo=openai&logoColor=000000&style=for-the-badge" />
    <img src="https://img.shields.io/badge/WebSocket-FFFFFF?logo=websocket&logoColor=000000&style=for-the-badge" />
</div>
*******************************************************************************************************************************************************

<h1>🧾 Documentación de Participación – Proyecto Skill Link </h1>

<p>👩🏻‍💻 Elaborado por: Dev. FrontEnd Alejandra Toloza</p>

<p>🗂️ Rama: frontend/Alejita/frontend</p>

<p>📁 Ruta local: D:/Skilllink-Alumnithon/frontend/SkillLink-Frontend</p>

_Mi contribución se enfocó en integrar funcionalidades clave como la mensajería en tiempo real, navegación segura mediante rutas controladas y la interfaz del mentor. Esta base sienta las bases para una experiencia de usuario interactiva, moderna y escalable dentro de la plataforma Skill Link._


<h2>🔧 Aportes Técnicos</h2>

Durante mi participación en el proyecto Skill Link, trabajé en las siguientes funcionalidades clave:

------------------------------------------------------

<h2>1️⃣ Desarrollo del Chat en Tiempo Real con WebSocket</h2>

<h3>🎯 Objetivo</h3>

<p>Permitir la comunicación en tiempo real entre usuarios mediante WebSocket, usando un diseño modular y reutilizable.</p>

<p>🧱 Estructura y componentes involucrados</p>

| _Componente_ |	_Descripción_ |
|--------------|----------------|
| `ChatBox.jsx`	| Caja de chat que renderiza mensajes, entrada de texto y manejo de envío. |
| `Conversations.jsx`	| Lista de conversaciones/contactos. A futuro, puede filtrar por mentores/alumnos. |
| `ChatPage.jsx`	| Página contenedora que une todos los elementos del sistema de chat. |
| `useChatSocket.js`	| Hook personalizado para gestionar la conexión WebSocket de forma centralizada. |


<h2>📡 Implementación WebSocket</h2>

✅ Se utilizó un hook `useChatSocket` para establecer la conexión a WebSocket de forma reactiva y organizada.

✅ Cada mensaje enviado se emite a través del socket y se recibe en tiempo real en el cliente destino.

✅ El sistema soporta múltiples usuarios diferenciados por `userId`.

🟥 Pendiente la conexión con BackEnd y probar la funcionalidad

<h2>📁 Archivos creados/actualizados</h2>


src/

├─ components/

│  └─ chat/

│     ├─ ChatBox.jsx

│     └─ Conversations.jsx

├─ hooks/

│  └─ useChatSocket.js

├─ pages/

│  └─ ChatPage.jsx

------------------------------------------------------

<h2>2️⃣ Pantalla del Rol "Mentor"</h2>

<h3>🎯 Objetivo</h3>

<p>Mostrar al mentor su información y funcionalidades específicas de su rol.</p>

<h2>🧱 Componentes involucrados</h2>

| _Componente_ |	_Función_ |
|----|----|
| `MentorPage.jsx` |	Vista principal del rol mentor |
| `MentorProfilePage.jsx`	| Página de perfil detallado del mentor |

<h2>📐 Diseño</h2>

✅ La interfaz se construyó con React CSS, manteniendo la coherencia visual del resto de la aplicación.

✅ Se integraron componentes como Sidebar, Topbar, y Footer.

------------------------------------------------------

<h2>3️⃣ Página de Error 404</h2>

<h3>🎯 Objetivo</h3>

<p>Mostrar una pantalla clara y amigable cuando el usuario navega a una ruta no válida.</p>

<h2>📁 Componente creado</h2>

| _Componente_ |	_Función_ |
|----|----|
| `Error404.jsx` |	Renderiza el mensaje de "Página no encontrada" con navegación de retorno. |

<h2>🌐 Ruta</h2>

Se integró en el archivo de rutas:

`<Route path="*" element={<Error404 />} />`

<h2>🎨 Estilos</h2>

Todos los componentes fueron estilizados con Tailwind CSS. Se aplicaron buenas prácticas de diseño:

✅ `bg-gray-100`, `text-sm`, `rounded-2xl`, `p-4`, etc.
✅ Interfaz responsive
✅ Tipografía consistente (`font-semibold`, `tracking-wide`)
✅ Uso de `flex` y `grid` para organización del layout

<h2>🔗 Estructura General Final</h2>

src/

├─ assets/

├─ components/

│  ├─ chat/

│  │  ├─ ChatBox.jsx

│  │  └─ Conversations.jsx

│  ├─ mentor/

│  ├─ FloatingMessage.jsx

│  ├─ Footer.jsx

│  ├─ NotificationBell.jsx

│  ├─ Sidebar.jsx

│  └─ Topbar.jsx

├─ context/

├─ hooks/

│  └─ useChatSocket.js

├─ pages/

│  ├─ ChatPage.jsx

│  ├─ MentorPage.jsx

│  ├─ MentorProfilePage.jsx

│  └─ Error404.jsx

├─ routes/

│  └─ AppRoutes.jsx





_______________________________________________________________________

| Proyecto realizado por:|
|----|
|👩🏻‍💻 _Alejandra Toloza_⚙️ |
| AlumniTHON 2025 |
| _Programa:_ _ONE G7 - 2024_ |
| _*Una alianza entre Alura Latam y Oracle*_ |


