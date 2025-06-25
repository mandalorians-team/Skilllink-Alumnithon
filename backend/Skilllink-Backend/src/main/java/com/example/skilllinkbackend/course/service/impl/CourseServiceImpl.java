package com.example.skilllinkbackend.course.service.impl;

import com.example.skilllinkbackend.course.entity.Course;
import com.example.skilllinkbackend.course.repository.CourseRepository;
import com.example.skilllinkbackend.course.service.CourseService;
import com.example.skilllinkbackend.course.specification.CourseSpecification;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;

    @Override
    public Course crear(Course course) {
        return repository.save(course);
    }

    @Override
    public Optional<Course> obtenerPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<Course> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Course actualizar(Long id, Course actualizado) {
        Course existente = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Curso no encontrado con ID: " + id));

        existente.setTitulo(actualizado.getTitulo());
        existente.setDescripcion(actualizado.getDescripcion());
        existente.setDuracionHoras(actualizado.getDuracionHoras());
        existente.setNivel(actualizado.getNivel());
        existente.setInstructor(actualizado.getInstructor());
        existente.setCertificacion(actualizado.getCertificacion());

        return repository.save(existente);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Course> buscarPorFiltros(String titulo, String nivel) {
        Specification<Course> spec = (root, query, cb) -> cb.conjunction();

        spec = Optional.ofNullable(titulo)
                .filter(t -> !t.isBlank())
                .map(CourseSpecification::tituloContiene)
                .map(spec::and)
                .orElse(spec);

        spec = Optional.ofNullable(nivel)
                .filter(n -> !n.isBlank())
                .map(CourseSpecification::nivelEs)
                .map(spec::and)
                .orElse(spec);

        return repository.findAll(spec);
    }

    // 🧠 Método refactorizado para soportar filtros opcionales + paginación
    // Este método construye dinámicamente una Specification con los criterios proporcionados
    // (titulo, nivel, instructorId) y los ejecuta directamente en la base de datos con paginación
    @Override
    public Page<Course> buscarConFiltros(String titulo, String nivel, Long instructorId, Pageable pageable) {
        Specification<Course> spec = (root, query, cb) -> cb.conjunction(); // Inicio con un filtro vacío (siempre true)

        // 🎯 Filtro por título (LIKE ignorando mayúsculas)
        spec = Optional.ofNullable(titulo)
                .filter(t -> !t.isBlank())
                .map(CourseSpecification::tituloContiene)
                .map(spec::and)
                .orElse(spec);

        // 🎯 Filtro por nivel exacto
        spec = Optional.ofNullable(nivel)
                .filter(n -> !n.isBlank())
                .map(CourseSpecification::nivelEs)
                .map(spec::and)
                .orElse(spec);

        // 🎯 Filtro por ID de instructor
        spec = Optional.ofNullable(instructorId)
                .map(CourseSpecification::porInstructorId)
                .map(spec::and)
                .orElse(spec);

        // 🚀 Ejecuta la consulta en base de datos de forma eficiente, con paginación
        return repository.findAll(spec, pageable);
    }

    public List<Course> buscarPorEjemploBasico() {
        Specification<Course> spec = CourseSpecification
                .tituloContiene("java")
                .and(CourseSpecification.nivelEs("intermedio"));

        return repository.findAll(spec);
    }
}
