package com.example.skilllinkbackend.course.repository;

import com.example.skilllinkbackend.course.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>, JpaSpecificationExecutor<Course>{

    // 🔍 Buscar cursos por título que contengan cierto texto (ignorando mayúsculas/minúsculas)
    List<Course> findByTituloContainingIgnoreCase(String titulo);

    // 🔍 Buscar cursos por nivel exacto
    List<Course> findByNivel(String nivel);
}

//findByTituloContainingIgnoreCase(String titulo) te permitirá implementar filtros de búsqueda desde el frontend fácilmente (útil para /courses?titulo=java).
//
//findByNivel(String nivel) te sirve para filtros por niveles como básico, intermedio, avanzado.
//
//Puedes agregar paginación con Page<Course> más adelante si lo deseas.