// Esta clase encapsula:
//
//una lista de cursos enriquecidos (List<CourseResponseDto>)
//
//metadatos de paginación: paginaActual, totalPaginas, etc.

package com.example.skilllinkbackend.course.dto;

import com.example.skilllinkbackend.course.entity.Course;
import com.example.skilllinkbackend.course.mapper.CourseMapper;
import lombok.*;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoursePageResponse {

    private List<CourseResponseDto> contenido;  // ✅ Actualizado a tipo enriquecido

    private int paginaActual;
    private int tamanioPagina;
    private long totalElementos;
    private int totalPaginas;
    private boolean ultimaPagina;

    // ✅ Método actualizado: mapea Page<Course> → CourseResponseDto
    public static CoursePageResponse from(Page<Course> page) {
        List<CourseResponseDto> contenido = page
                .map(CourseMapper::toResponseDto)
                .toList();

        return CoursePageResponse.builder()
                .contenido(contenido)
                .paginaActual(page.getNumber())
                .tamanioPagina(page.getSize())
                .totalElementos(page.getTotalElements())
                .totalPaginas(page.getTotalPages())
                .ultimaPagina(page.isLast())
                .build();
    }
}
