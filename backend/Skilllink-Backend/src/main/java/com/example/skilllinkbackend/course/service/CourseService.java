package com.example.skilllinkbackend.course.service;

import com.example.skilllinkbackend.course.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.Optional;

public interface CourseService {

    Course crear(Course course);

    Optional<Course> obtenerPorId(Long id);

    List<Course> listarTodos();

    Course actualizar(Long id, Course courseActualizado);

    void eliminar(Long id);

    // Búsqueda sin paginación (usado inicialmente con filtrado manual)
    List<Course> buscarPorFiltros(String titulo, String nivel);

    // 🔍 Nuevo método para búsqueda con Specification y paginación avanzada
    Page<Course> buscarConFiltros(String titulo, String nivel, Long instructorId, Pageable pageable);
}
