//> Se asume que Instructor y Certificación están correctamente cargados (lazy o eager según configuración).

package com.example.skilllinkbackend.course.mapper;

import com.example.skilllinkbackend.course.dto.CourseDto;
import com.example.skilllinkbackend.course.dto.CourseResponseDto;
import com.example.skilllinkbackend.course.entity.Course;
import com.example.skilllinkbackend.certification.entity.Certification;
import com.example.skilllinkbackend.user.entity.User;

public class CourseMapper {

    // 🎯 Convierte de entidad Course a CourseDto (usado en formularios o transferencia básica)
    public static CourseDto toDto(Course course) {
        if (course == null) return null;

        return CourseDto.builder()
                .id(course.getId())
                .titulo(course.getTitulo())
                .descripcion(course.getDescripcion())
                .duracionHoras(course.getDuracionHoras())
                .nivel(course.getNivel())
                .instructorId(course.getInstructor() != null ? course.getInstructor().getId() : null)
                .certificacionId(course.getCertificacion() != null ? course.getCertificacion().getId() : null)
                .build();
    }

    // 📥 Convierte de DTO a entidad Course. Inyectar instructor y certificación previamente.
    public static Course toEntity(CourseDto dto, User instructor, Certification certificacion) {
        if (dto == null) return null;

        return Course.builder()
                .id(dto.getId())
                .titulo(dto.getTitulo())
                .descripcion(dto.getDescripcion())
                .duracionHoras(dto.getDuracionHoras())
                .nivel(dto.getNivel())
                .instructor(instructor)
                .certificacion(certificacion)
                .build();
    }

    public static Course toEntityForCreate(CourseDto dto, User instructor, Certification certificacion) {
        return Course.builder()
                .titulo(dto.getTitulo())
                .descripcion(dto.getDescripcion())
                .duracionHoras(dto.getDuracionHoras())
                .nivel(dto.getNivel())
                .instructor(instructor)
                .certificacion(certificacion)
                .build();  // No setea el id
    }

    // 📤 Convierte Course a CourseResponseDto enriquecido con nombre de instructor y certificación
    public static CourseResponseDto toResponseDto(Course course) {
        if (course == null) return null;

        return CourseResponseDto.builder()
                .id(course.getId())
                .titulo(course.getTitulo())
                .descripcion(course.getDescripcion())
                .duracionHoras(course.getDuracionHoras())
                .nivel(course.getNivel())
                .nombreInstructor(course.getInstructor() != null ? course.getInstructor().getUsername() : null)
                .nombreCertificacion(course.getCertificacion() != null ? course.getCertificacion().getNombre() : null)
                .build();

        //        > Se asume que Instructor y Certificación están correctamente cargados (lazy o eager según configuración).
    }
}
