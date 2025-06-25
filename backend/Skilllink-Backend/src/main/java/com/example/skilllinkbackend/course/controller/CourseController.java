package com.example.skilllinkbackend.course.controller;

import com.example.skilllinkbackend.certification.entity.Certification;
import com.example.skilllinkbackend.certification.repository.CertificationRepository;
import com.example.skilllinkbackend.course.dto.CourseDto;
import com.example.skilllinkbackend.course.dto.CoursePageResponse;
import com.example.skilllinkbackend.course.dto.CourseResponseDto;
import com.example.skilllinkbackend.course.entity.Course;
import com.example.skilllinkbackend.course.mapper.CourseMapper;
import com.example.skilllinkbackend.course.service.CourseService;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
@Tag(name = "Cursos", description = "Operaciones relacionadas con cursos")
public class CourseController {

    private final CourseService courseService;
    private final UserRepository userRepository;
    private final CertificationRepository certificationRepository;

    @Operation(summary = "Listar todos los cursos")
    @GetMapping
    public ResponseEntity<List<CourseDto>> listarTodos() {
        List<CourseDto> dtos = courseService.listarTodos()
                .stream()
                .map(CourseMapper::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @Operation(summary = "Obtener un curso por su ID")
    @GetMapping("/{id}")
    public ResponseEntity<CourseDto> obtenerPorId(@PathVariable Long id) {
        return courseService.obtenerPorId(id)
                .map(CourseMapper::toDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Crear un nuevo curso")
    @PostMapping
    public ResponseEntity<CourseDto> crear(@Valid @RequestBody CourseDto dto) {
        User instructor = userRepository.findById(dto.getInstructorId())
                .orElseThrow(() -> new IllegalArgumentException("Instructor no encontrado"));
        Certification cert = dto.getCertificacionId() != null
                ? certificationRepository.findById(dto.getCertificacionId()).orElse(null)
                : null;

        Course creado = courseService.crear(CourseMapper.toEntity(dto, instructor, cert));
        return ResponseEntity.ok(CourseMapper.toDto(creado));
    }

    @Operation(summary = "Actualizar un curso existente")
    @PutMapping("/{id}")
    public ResponseEntity<CourseDto> actualizar(@PathVariable Long id, @Valid @RequestBody CourseDto dto) {
        User instructor = userRepository.findById(dto.getInstructorId())
                .orElseThrow(() -> new IllegalArgumentException("Instructor no encontrado"));
        Certification cert = dto.getCertificacionId() != null
                ? certificationRepository.findById(dto.getCertificacionId()).orElse(null)
                : null;

        Course actualizado = courseService.actualizar(id, CourseMapper.toEntity(dto, instructor, cert));
        return ResponseEntity.ok(CourseMapper.toDto(actualizado));
    }

    @Operation(summary = "Eliminar un curso")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        courseService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(
            summary = "Buscar cursos con filtros y paginación",
            description = "Permite buscar cursos por título parcial, nivel exacto e ID de instructor. " +
                    "La respuesta incluye contenido con nombres descriptivos y metadatos de paginación."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Ejemplo de respuesta JSON para búsqueda paginada",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = CoursePageResponse.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de respuesta exitosa",
                                    summary = "Listado paginado con metadatos y cursos enriquecidos",
                                    value = """
                    {
                      "contenido": [
                        {
                          "id": 101,
                          "titulo": "Java Spring Boot Essentials",
                          "descripcion": "Domina la creación de APIs RESTful",
                          "duracionHoras": 20,
                          "nivel": "intermedio",
                          "nombreInstructor": "Lucas Ramírez",
                          "nombreCertificacion": "Backend Intermedio"
                        },
                        {
                          "id": 102,
                          "titulo": "Arquitectura en Módulos con Spring",
                          "descripcion": "Diseño avanzado por dominios y especificaciones",
                          "duracionHoras": 24,
                          "nivel": "avanzado",
                          "nombreInstructor": "Daniela Rojas",
                          "nombreCertificacion": "Arquitectura Profesional"
                        }
                      ],
                      "paginaActual": 0,
                      "tamanioPagina": 10,
                      "totalElementos": 42,
                      "totalPaginas": 5,
                      "ultimaPagina": false
                    }
                    """
                            )
                    )
            ),
            @ApiResponse(responseCode = "400", description = "Parámetros inválidos")
    })
    @GetMapping("/buscar")
    public ResponseEntity<CoursePageResponse> buscarCursos(
            @Parameter(description = "Texto incluido en el título del curso", example = "java")
            @RequestParam(required = false) String titulo,

            @Parameter(description = "Nivel del curso (ej: basico, intermedio, avanzado)", example = "intermedio")
            @RequestParam(required = false) String nivel,

            @Parameter(description = "ID del instructor asociado al curso", example = "5")
            @RequestParam(required = false) Long instructorId,

            @Parameter(description = "Número de página (desde 0)", example = "0")
            @RequestParam(defaultValue = "0") int page,

            @Parameter(description = "Cantidad de resultados por página", example = "10")
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("titulo").ascending());
        Page<Course> resultado = courseService.buscarConFiltros(titulo, nivel, instructorId, pageable);
        CoursePageResponse respuesta = CoursePageResponse.from(resultado);
        return ResponseEntity.ok(respuesta);
    }
}
