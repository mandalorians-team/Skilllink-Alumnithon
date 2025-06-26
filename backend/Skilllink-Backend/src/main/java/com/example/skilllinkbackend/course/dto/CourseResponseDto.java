//🎯 Solo atributos de lectura que el frontend necesita mostrar (sin IDs internos ni relaciones JPA).

package com.example.skilllinkbackend.course.dto;//🎯 Solo atributos de lectura que el frontend necesita mostrar (sin IDs internos ni relaciones JPA).
//package com.example.skilllinkbackend.course.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseResponseDto {

    private Long id;
    private String titulo;
    private String descripcion;
    private Integer duracionHoras;
    private String nivel;

    private String nombreInstructor;      // ✅ ex-Instructor.getNombre()
    private String nombreCertificacion;   // ✅ ex-Certificacion.getNombre() (puede ser null si no tiene)

}
