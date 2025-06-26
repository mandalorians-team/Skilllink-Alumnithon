package com.example.skilllinkbackend.course.entity;

import com.example.skilllinkbackend.certification.entity.Certification;
import com.example.skilllinkbackend.user.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El título del curso es obligatorio")
    @Column(nullable = false)
    private String titulo;

    @NotBlank(message = "La descripción del curso no puede estar vacía")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String descripcion;

    @NotNull(message = "La duración del curso es requerida")
    @Min(value = 1, message = "La duración mínima debe ser de 1 hora")
    private Integer duracionHoras;

    @NotBlank(message = "El nivel del curso es obligatorio (básico, intermedio, avanzado)")
    private String nivel;

    @ManyToOne(optional = false)
    @JoinColumn(name = "instructor_id", nullable = false)
    private User instructor;

    @ManyToOne
    @JoinColumn(name = "certificacion_id")
    private Certification certificacion;
}
