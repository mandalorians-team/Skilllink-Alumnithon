```markdown
# 📘 Skilllink — Guía Técnica y Funcional.
Skilllink es una plataforma de mentorías colaborativas que conecta a usuarios con distintos roles (mentores, aprendices y administradores), permitiendo desarrollar habilidades técnicas, documentar el crecimiento y conectar comunidades de práctica.

---

## ⚙️ Características principales

## 🚀 Características implementadas

- [x] Registro y autenticación de usuarios (`JWT`)
- [x] CRUD de usuarios (`/api/users`)
- [x] CRUD de cursos (`/api/courses`)
- [x] Asignación de mentorías (`/api/mentorships`)
- [ ] Evaluaciones entre usuarios (en proceso)
- [ ] Notificaciones (pendiente)
- [x] Documentación con Swagger

---

## 🧱 Estructura del proyecto (Backend)
skilllink-backend/
├── src/main/java/com/example/skilllinkbackend/

| Módulo         | Descripción                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `auth/`        | Lógica de autenticación y generación de tokens JWT                          |
| `category/`    | Gestión de categorías temáticas para cursos                                 |
| `certification/`| Módulo de certificaciones emitidas por mentorías o cursos                  |
| `config/`      | Configuración de seguridad, Swagger y CORS                                  |
| `course/`      | CRUD de cursos: duración, categorías y descripción                          |
| `evaluation/`  | Evaluaciones de desempeño entre usuarios, calificaciones y feedback         |
| `home/`        | Controlador para vista inicial o página pública                             |
| `learner/`     | Gestión de aprendices, sus intereses y estilos de aprendizaje               |
| `mentor/`      | Gestión de mentores y sus competencias                                      |
| `mentorship/`  | Relación de tutorías entre mentores y aprendices                            |
| `project/`     | Gestión de proyectos colaborativos o entregables prácticos                  |
| `security/`    | Filtros, validaciones y reglas de acceso por roles                          |
| `user/`        | Registro de usuarios, roles (`ADMIN`, `MENTOR`, `LEARNER`)                  |

---

### 🧩 Componentes generales

| Componente       | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Entities**     | Clases JPA que representan tablas de la base de datos                       |
| **DTOs**         | Objetos para exponer datos de forma segura al cliente                       |
| **Repositories** | Interfaces basadas en `JpaRepository` para operaciones CRUD                 |
| **Services**     | Capa de negocio: validaciones, flujos de datos y procesos internos          |
| **Controllers**  | Endpoints REST: entrada/salida documentada con Swagger                     |
| **Security**     | Lógica de autenticación/autorización con Spring Security + JWT              |
| **mapper/**      | Transformación entre entidades ↔ DTOs usando MapStruct o lógica manual      |
| **specification/**| Filtros dinámicos con JPA Specification para búsquedas personalizadas     |
```

## ⚒️ Tecnologías utilizadas

- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security + JWT
- PostgreSQL
- Swagger UI / OpenAPI
- Maven
- Vite (Frontend)
- Docker (en proceso de integración)

---

## 🚀 Instalación y ejecución

### Clonar el repositorio

```bash
git clone https://github.com/mandalorians-team/Skilllink-Alumnithon.git
cd skilllink-backend
```

### Ejecutar el backend

```bash
mvn spring-boot:run
```

La app estará disponible en: `http://localhost:8080`

### Acceder a la documentación Swagger

> http://localhost:8080/swagger-ui/index.html

---

## 📚 Endpoints REST por módulo

---

### 📘 Auth Controller

| ✅ | Método | Endpoint              | Descripción                        |
|-----|--------|-----------------------|------------------------------------|
| [ ] | POST   | `/api/auth/register`  | Registro de nuevo usuario y obtener JWT                  
| [ ] | POST   | `/api/auth/logout`    | Cierre de sesión                   |
| [ ] | POST   | `/api/auth/login`     | Autenticación y obtención de token|

---

### 📘 Cursos

| ✅ | Método | Endpoint                     | Descripción                                 |
|-----|--------|------------------------------|---------------------------------------------|
| [ ] | GET    | `/api/courses/{id}`          | Obtener un curso por su ID                  |
| [ ] | PUT    | `/api/courses/{id}`          | Actualizar un curso existente               |
| [ ] | DELETE | `/api/courses/{id}`          | Eliminar un curso                           |
| [ ] | GET    | `/api/courses`               | Listar todos los cursos                     |
| [ ] | POST   | `/api/courses`               | Crear un nuevo curso                        |
| [ ] | GET    | `/api/courses/buscar`        | Buscar cursos con filtros y paginación      |

---

### 📘 Certification Controller

| ✅ | Método | Endpoint                   | Descripción                       |
|-----|--------|----------------------------|-----------------------------------|
| [ ] | GET    | `/certifications/{id}`     | Obtener una certificación por ID  |
| [ ] | PUT    | `/certifications/{id}`     | Actualizar una certificación      |
| [ ] | GET    | `/certifications`          | Listar todas las certificaciones  |
| [ ] | POST   | `/certifications`          | Crear una nueva certificación     |

---

### 📘 Project Controller

| ✅ | Método | Endpoint                 | Descripción                          |
|-----|--------|--------------------------|--------------------------------------|
| [ ] | GET    | `/api/projects/{id}`     | Obtener proyecto por ID              |
| [ ] | PUT    | `/api/projects/{id}`     | Actualizar proyecto                  |
| [ ] | DELETE | `/api/projects/{id}`     | Eliminar proyecto                    |
| [ ] | GET    | `/api/projects`          | Listar todos los proyectos           |
| [ ] | POST   | `/api/projects`          | Crear nuevo proyecto                 |

---

### 📘 Mentor Controller

| ✅ | Método | Endpoint                | Descripción                     |
|-----|--------|-------------------------|---------------------------------|
| [ ] | GET    | `/api/mentors/{id}`     | Obtener mentor por ID           |
| [ ] | PUT    | `/api/mentors/{id}`     | Actualizar mentor               |
| [ ] | DELETE | `/api/mentors/{id}`     | Eliminar mentor                 |
| [ ] | GET    | `/api/mentors`          | Listar todos los mentores       |

---

### 📘 Learner Controller

| ✅ | Método | Endpoint                 | Descripción                     |
|-----|--------|--------------------------|---------------------------------|
| [ ] | GET    | `/api/learners/{id}`     | Obtener aprendiz por ID         |
| [ ] | PUT    | `/api/learners/{id}`     | Actualizar aprendiz             |
| [ ] | DELETE | `/api/learners/{id}`     | Eliminar aprendiz               |
| [ ] | GET    | `/api/learners`          | Listar todos los aprendices     |

---

### 📘 Category Controller

| ✅ | Método | Endpoint                  | Descripción                             |
|-----|--------|---------------------------|-----------------------------------------|
| [ ] | GET    | `/api/categories/{id}`    | Obtener categoría por ID                |
| [ ] | PUT    | `/api/categories/{id}`    | Actualizar categoría                    |
| [ ] | DELETE | `/api/categories/{id}`    | Eliminar categoría                      |
| [ ] | GET    | `/api/categories`         | Listar todas las categorías             |
| [ ] | POST   | `/api/categories`         | Crear una nueva categoría               |

---

### 📘 Mentorship Controller

| ✅ | Método | Endpoint                      | Descripción                                 |
|-----|--------|-------------------------------|---------------------------------------------|
| [ ] | GET    | `/api/mentorships`            | Listar todas las relaciones de mentoría     |
| [ ] | POST   | `/api/mentorships`            | Crear nueva relación de mentoría            |
| [ ] | GET    | `/api/mentorships/{id}`       | Obtener mentoría por ID                     |

---

### 📘 Evaluation Controller

| ✅ | Método | Endpoint                            | Descripción                                 |
|-----|--------|-------------------------------------|---------------------------------------------|
| [ ] | POST   | `/api/evaluations`                  | Registrar una evaluación                    |
| [ ] | GET    | `/api/evaluations/by-user/{id}`     | Ver evaluaciones hechas a un usuario        |

---


### 📘 User Controller

| ✅ | Método | Endpoint              | Descripción                   |
|-----|--------|-----------------------|-------------------------------|
| [ ] | GET    | `/users`              | Listar todos los usuarios     |
| [ ] | GET    | `/users/api/info`     | Obtener información del usuario|

---

### 📘 Home Controller

| ✅ | Método | Endpoint | Descripción               |
|-----|--------|----------|---------------------------|
| [ ] | GET    | `/`      | Página raíz del backend    |

---

## 🧪 Pruebas manuales

Puedes usar Postman o Swagger.

---

## 🔐 Seguridad

- Autenticación vía JWT
- Login por `POST /api/auth/login` con `username` y `password`
- Acceso protegido a recursos según roles:
  - `ADMIN`: acceso total
  - `MENTOR`: acceso a mentorías asignadas
  - `LEARNER`: acceso a cursos, evaluaciones y feedback recibido

---

## 📦 Frontend

- Repositorio: `skilllink-frontend/`
- Stack: Vite + React
- Despliegue:
  - En desarrollo: `npm run dev`
  - En producción: `npm run build`, copiar contenido de `dist/` a `skilllink-backend/src/main/resources/static/`
---

## 📚 Documentación Externa
•  	Notion: 
	ttps://www.notion.so/211881067d6380cc8e00ce8612eca158?v=211881067d638024adf9000c81445bd8&p=216881067d6380dfb220d9ebac71df56&pm=s
•  	trello: https://trello.com/b/VSbgAxW0/skill-link-alumnithon-2025

Desarrollado por Mandalorian Team – Equipo 3 Alunithon ONE 2025✨
Equipo De desarrollo: 4 Desarrolladores Backend y 3 desarrolladores Frontend: 
•  	Elise Ortega (Elise Ortega) – Frontend. 
•  	Alejandro Anchundia (Alejo) – Frontend. 
•	       Alejandra Toloza – Frontend. 
 • 	Luiggi (!Lviggi) – Backend. 
• 	Cristian Yanes (Kazjael) – Backend.
• 	Ignacio Navarro (Ignacio) – Backend.
• 	Alejandro Quintana (haqui82) – Backend.

---

## 📚 Créditos

Desarrollado por Mandalorian Team – Equipo 3 Alunithon ONE 2025✨
Equipo De desarrollo: 4 Desarrolladores Backend y 3 desarrolladores Frontend: 
•  	Elise Ortega (Elise Ortega) – Frontend. 
•  	Alejandro Anchundia (Alejo) – Frontend. 
•	       Alejandra Toloza – Frontend. 
 • 	Luiggi (!Lviggi) – Backend. 
• 	Cristian Yanes (Kazjael) – Backend.
• 	Ignacio Navarro (Ignacio) – Backend.
• 	Alejandro Quintana (haqui82) – Backend.

---

```

---

