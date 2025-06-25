## [Unreleased] - 2025-06-25

### ✨ Agregado
- Implementación del módulo `Course`:
  - Entidad `Course` con validaciones (`@NotBlank`, `@Min`) y relaciones `@ManyToOne` con `User` (Instructor) y `Certification`
  - Servicio `CourseService` y `CourseServiceImpl` con operaciones CRUD completas
  - Repositorio `CourseRepository` extendido con `JpaSpecificationExecutor` para búsquedas dinámicas
  - Clase `CourseSpecification` con filtros combinables por `titulo`, `nivel`, `certificación` e `instructorId`

- Endpoints REST para:
  - Listar todos los cursos
  - Obtener curso por ID
  - Crear nuevo curso (vinculado con `User` y `Certification`)
  - Actualizar curso existente
  - Eliminar curso por ID
  - Buscar cursos por filtros con paginación (`/buscar?titulo=...&nivel=...`)

- DTOs:
  - `CourseDto` para entrada/salida básica
  - `CourseResponseDto` para salidas enriquecidas (nombre del instructor, nombre de certificación)
  - `CoursePageResponse` con metadatos de paginación (`paginaActual`, `totalPaginas`, etc.)

- Mapper `CourseMapper` con métodos:
  - `toDto(Course)`
  - `toEntity(CourseDto, User, Certification)`
  - `toResponseDto(Course)` para construir respuestas enriquecidas

- Documentación Swagger:
  - Anotaciones completas en `CourseController`
  - Ejemplo ilustrativo en formato JSON para endpoint `/buscar`
  - Parámetros documentados con `@Parameter`, respuestas con `@ApiResponse`, ejemplo con `@ExampleObject`

- Pruebas unitarias:
  - Clase `CourseMapperTest` con cobertura de `toResponseDto(...)` usando JUnit 5 y Mockito
  - Casos con instructor/certificación nulos y valores simulados

### 🧠 Búsqueda avanzada con Specifications
- Integración de Specification dinámico en `CourseServiceImpl.buscarPorFiltros(...)` usando API fluida y segura con `Optional`
- Permite filtrar por `titulo`, `nivel` e `instructorId` directamente en la base de datos
- Implementado método `buscarConFiltros(...)` con paginación

### 🧼 Refactor técnico (🔔 importante para el equipo)
- Eliminado el uso de `Specification.where(...)`, deprecado desde Spring Data JPA 3.2
- Reemplazado por `(root, query, cb) -> cb.conjunction()` como punto de inicio neutral en Specification
- Documentado en el código fuente con advertencia para futuros desarrolladores
- Se recomienda evitar el uso de métodos `where(...)` en implementaciones nuevas


