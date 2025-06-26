package com.example.skilllinkbackend.course.dto;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseDto {

    private Long id; // Usado para respuestas o edición, no requerido en POST

    @NotBlank(message = "El título del curso es obligatorio")
    private String titulo;

    @NotBlank(message = "La descripción no puede estar vacía")
    private String descripcion;

    @NotNull(message = "La duración es requerida")
    @Min(value = 1, message = "Debe tener al menos 1 hora")
    private Integer duracionHoras;

    @NotBlank(message = "El nivel es obligatorio (ej. básico, intermedio)")
    private String nivel;

    @NotNull(message = "El ID del instructor es obligatorio")
    private Long instructorId;

    private Long certificacionId; // Puede ser null si no hay certificación vinculada
}
