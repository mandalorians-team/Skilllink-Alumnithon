# 📘 Skilllink — Guía Técnica y Funcional

Skilllink es una plataforma de mentorías colaborativas que conecta a usuarios con distintos roles (mentores, aprendices y administradores), permitiendo desarrollar habilidades técnicas, documentar el crecimiento y conectar comunidades de práctica.

> **Rama principal: [`develop`](https://github.com/mandalorians-team/Skilllink-Alumnithon/tree/develop)**



## 🚀 Características implementadas

- [x] Registro y autenticación de usuarios (`JWT`)
- [x] CRUD de usuarios (`/api/users`)
- [x] CRUD de cursos (`/api/courses`)
- [x] Asignación de mentorías (`/api/mentorships`)
- [ ] Evaluaciones entre usuarios (en proceso)
- [ ] Notificaciones (pendiente)
- [x] Documentación con Swagger



## 🧱 Estructura del proyecto (Backend)



```
skilllink-backend/
└── src/main/java/com/example/skilllinkbackend/
```


| Módulo           | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `auth/`          | Lógica de autenticación y generación de tokens JWT                          |
| `category/`      | Gestión de categorías temáticas para cursos                                 |
| `certification/` | Módulo de certificaciones emitidas por mentorías o cursos                   |
| `config/`        | Configuración de seguridad, Swagger y CORS                                  |
| `course/`        | CRUD de cursos: duración, categorías y descripción                          |
| `evaluation/`    | Evaluaciones de desempeño entre usuarios, calificaciones y feedback         |
| `home/`          | Controlador para vista inicial o página pública                             |
| `learner/`       | Gestión de aprendices, sus intereses y estilos de aprendizaje               |
| `mentor/`        | Gestión de mentores y sus competencias                                      |
| `mentorship/`    | Relación de tutorías entre mentores y aprendices                            |
| `project/`       | Gestión de proyectos colaborativos o entregables prácticos                  |
| `security/`      | Filtros, validaciones y reglas de acceso por roles                          |
| `user/`          | Registro de usuarios, roles (`ADMIN`, `MENTOR`, `LEARNER`)                  |

### 🧩 Componentes generales

| Componente       | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Entities**     | Clases JPA que representan tablas de la base de datos                       |
| **DTOs**         | Objetos para exponer datos de forma segura al cliente                       |
| **Repositories** | Interfaces basadas en `JpaRepository` para operaciones CRUD                 |
| **Services**     | Capa de negocio: validaciones, flujos de datos y procesos internos          |
| **Controllers**  | Endpoints REST: entrada/salida documentada con Swagger                      |
| **Security**     | Lógica de autenticación/autorización con Spring Security + JWT              |
| **mapper/**      | Transformación entre entidades ↔ DTOs usando MapStruct o lógica manual      |
| **specification/**| Filtros dinámicos con JPA Specification para búsquedas personalizadas      |



### 🧑‍🎨 Frontend

Usar este formato para ramas de frontend:  
`frontend/<tipo>/<id-opcional>-<descripcion>`

#### ✅ Ejemplos Frontend

- `frontend/feature/102-login-form`
- `frontend/fix/203-header-bug`
- `frontend/hotfix/999-css-break-navbar`
- `frontend/docs/actualizar-readme`



## ⚙️ Tech Stack

### Backend

- **Java 21**
- **Spring Boot 3+**
- **Spring Security** (JWT)
- **Spring Data JPA**
- **PostgreSQL 14+**
- **Flyway** (DB migrations)
- **Swagger/OpenAPI** (API docs)
- **WebSockets** (real-time features)

### Frontend

- **React 18+**
- **TypeScript**
- **Tailwind CSS 3+**
- **Vite**
- **React Router**
- **Jest** / **React Testing Library**



## 🗂️ Project Structure

### Frontend (simplificado)



```
frontend/SkillLink-Frontend/
├── src/
│ ├── assets/ # Imágenes y logotipos
│ ├── components/ # Componentes reutilizables por dominio
│ ├── context/ # Estado global (Auth, etc.)
│ ├── data/ # Datos de prueba
│ ├── hooks/ # Custom hooks
│ ├── interfaces/ # Tipos/interfaces TypeScript
│ ├── pages/ # Páginas principales por módulo
│ ├── routes/ # Rutas generales
│ ├── services/ # Conexiones al backend/API
│ ├── styles/ # Estilos globales (Tailwind)
│ ├── tests/ # Pruebas unitarias
│ ├── main.jsx # Entry point
│ └── App.jsx # Root component
```

### Backend (resumido)

Ver tabla de módulos arriba.





## 🛠️ Instalación local

### Requisitos

- Node.js 18+
- Java 21
- Maven
- PostgreSQL 14+ (o Docker)
- Docker (opcional)

### Backend

```bash
cd backend/Skilllink-Backend
cp application.yml.example application.yml
# Configura las variables de entorno según perfil (dev/prod)
./mvnw spring-boot:run

```

- El perfil `dev` usa H2 por defecto; para PostgreSQL usa `SPRING_PROFILES_ACTIVE=prod` y define tus credenciales.

### Frontend

```sh
cd frontend/SkillLink-Frontend
npm install
npm run dev

```
- Servidor en [http://localhost:5173](http://localhost:5173)


### Frontend scopes

- `ui`
- `navbar`
- `login`
- `home`
- `profile`
- `form`
- `theme`
- `layout`

### Backend scopes

- `auth`
- `user`
- `db`
- `service`
- `api`
- `security`
- `payment`



## 🐳 Docker

Ejemplo rápido:

```yaml
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: skilllinkdb
      POSTGRES_USER: skilllinkuser
      POSTGRES_PASSWORD: strongpassword
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

  backend:
    build: ./backend/Skilllink-Backend
    environment:
      SPRING_PROFILES_ACTIVE: prod
      DB_URL: jdbc:postgresql://db:5432/skilllinkdb
      DB_USERNAME: skilllinkuser
      DB_PASSWORD: strongpassword
      JWT_SECRET: your_jwt_secret
    ports:
      - "8080:8080"
    depends_on:
      - db

  frontend:
    build: ./frontend/SkillLink-Frontend
    ports:
      - "5173:5173"
    environment:
      VITE_API_URL: http://localhost:8080
    depends_on:
      - backend

volumes:
  db_data:

```

- Levanta todo con: `docker-compose up --build`

---

## 🚀 Guía de despliegue

1. **Backend:** Despliega el backend en Render, Heroku, etc. Configura variables de entorno (`SPRING_PROFILES_ACTIVE=prod`, `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`, `JWT_SECRET`).
2. **Frontend:** Despliega la carpeta `frontend/SkillLink-Frontend` en Vercel/Netlify/Render como sitio estático. Configura `VITE_API_URL`.
3. **CORS:** Configura CORS en backend para el dominio frontend.

---


## 📚 Documentación interna

- Documentos Writerside en `backend/Skilllink-Backend/Writerside/topics/`
  - `SRS.md`, `Functional-Requirements.md`, `Application-Configuration.md`
- API Swagger en `/swagger-ui/` al levantar el backend

## 🤝 Contribución

- Usa ramas: `frontend/feature/...`, `backend/fix/...`, etc.
- Commits con Conventional Commits: `feat(ui): ...`, `fix(api): ...`
- Pull requests obligatorios
- Flujo y buenas prácticas en este README


## 🧭 Ejemplo de flujo real: Frontend

- `git checkout develop`
- `git checkout -b frontend/feature/103-navbar-component`
- Haces tus cambios ✍️
- `git add .`
- `git commit -m "feat(navbar): add navbar with responsive design"`
- `git push -u origin frontend/feature/103-navbar-component`

## Ejemplo de flujo real: Backend

- `git checkout develop`
- `git checkout -b backend/fix/207-auth-token-expiration`
- Haces tus cambios ✍️
- `git add .`
- `git commit -m "fix(auth): correct token expiration logic"`
- `git push -u origin backend/fix/207-auth-token-expiration`



## 📝 Licencia

MIT © Equipo Mandalorians



**“Así es el camino.” — Mandalorians Dev Team**

