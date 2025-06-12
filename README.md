# 🛡️ Guía Git Mandalorians

## 💥 Convención de Nombres de Ramas y Commits para Frontend y Backend

> *"Así es el camino."* — Mandalorians Dev Team

---

## 🚀 Parte 1: Nombres de Ramas (Branch Naming)

### 🧑‍🎨 **Frontend**
Usar este formato para ramas de frontend: 
`frontend/<tipo>/<id-opcional>-<descripcion>`


#### ✅ Ejemplos:
- `frontend/feature/102-login-form`
- `frontend/fix/203-header-bug`
- `frontend/hotfix/999-css-break-navbar`
- `frontend/docs/actualizar-readme`


---

### 🧑‍💻 **Backend**

Usar este formato para ramas de backend:
`backend/<tipo>/<id-opcional>-<descripcion>`

#### ✅ Ejemplos:
- `backend/feature/101-auth-service`
- `backend/fix/205-null-user-error`
- `backend/hotfix/998-db-connection-issue`
- `backend/chore/configurar-hibernate`


---

### 📚 Tipos de rama válidos

| Tipo       | ¿Para qué sirve?                                  |
| ---------- | ------------------------------------------------- |
| `feature/` | Nueva funcionalidad                               |
| `fix/`     | Corrección de errores menores                     |
| `hotfix/`  | Fix urgente en producción                         |
| `release/` | Preparar una versión                              |
| `docs/`    | Cambios en documentación (`README`, `wiki`, etc.) |
| `chore/`   | Configuraciones, scripts, tareas no funcionales   |
| `test/`    | Nuevas pruebas o actualizaciones a los tests      |

---

## ✅ Buenas prácticas para ramas

- Usar guiones `-` entre palabras
- Nada de mayúsculas, espacios o acentos
- Agrega ID de la tarea si usás Trello/Jira/Notion
- Que el nombre diga claramente qué estás haciendo

---

## 📝 Parte 2: Convención para Commits

Usamos **Conventional Commits** para que sea fácil de leer, mantener, y automatizar.

### 🎯 Formato
`<tipo>(<scope>): <descripción>`

---

### 🧠 Alcances (scope)

Usar scopes claros para identificar si estás tocando el frontend o backend y qué parte del sistema:

**Frontend scopes**
- `ui`
- `navbar`
- `login`
- `home`
- `profile`
- `form`
- `theme`
- `layout`


**Backend scopes**
- `auth`
- `user`
- `db`
- `service`
- `api`
- `security`
- `payment`


---

### ✨ Tipos de commits y ejemplos

| Tipo       | ¿Cuándo se usa?                                | Ejemplo Frontend                           | Ejemplo Backend                             |
| ---------- | ---------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| `feat`     | Nueva funcionalidad                            | `feat(ui): add dark mode toggle`           | `feat(auth): implement JWT middleware`      |
| `fix`      | Bug o error corregido                          | `fix(form): fix required field validation` | `fix(db): correct query syntax for reports` |
| `docs`     | Documentación (README, comentarios, wiki)      | `docs(home): update usage section`         | `docs(api): add OpenAPI spec`               |
| `style`    | Formato, sin lógica (espacios, comas)          | `style(layout): fix indentation`           | `style(api): reorder imports`               |
| `refactor` | Reestructuración del código                    | `refactor(navbar): simplify render logic`  | `refactor(user): extract role-check method` |
| `test`     | Agregar o modificar pruebas                    | `test(login): add validation unit tests`   | `test(auth): create token expiration tests` |
| `chore`    | Tareas varias (config, dependencias, CI/CD...) | `chore: update React version`              | `chore: setup docker-compose`               |

---

### ⛔ Ejemplos de commits malos

No uses mensajes como:

- ❌ `arreglé cosas`
- ❌ `final final`
- ❌ `fix`
- ❌ `actualización`
- ❌ `YA FUNCIONA`

---

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



---

📌 **Reglas de oro del equipo Mandalorians**

- 🔒 Nadie hace push directo a `main` ni `develop`
- 🚀 Todo cambio se hace desde ramas `frontend/` o `backend/`
- 🧪 Todo va con PR (Pull Request), revisión y test
- 📋 Commits claros con tipo y scope
- 🔥 `hotfix/` solo para bugs urgentes en `main`
- ✅ El nombre de la rama debe reflejar su propósito

---



