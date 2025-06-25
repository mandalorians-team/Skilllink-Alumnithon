//2. ¿Cuál es la función del paquete specification?
//El paquete specification dentro del módulo course agrupa todas las clases que definen consultas dinámicas mediante el patrón Specification, usando la API de Criteria de Spring.
//
//Este patrón permite filtrar dinámicamente los cursos por propiedades como:
//
//título parcial (LIKE)
//
//nivel (EQUAL)
//
//instructor (@ManyToOne)
//
//certificación presente/no presente
//
//Ventajas:
//
//Evita crear 10 métodos en el repositorio
//
//Permite construir filtros combinados al vuelo
//
//Facilita paginación y ordenamiento

package com.example.skilllinkbackend.course.specification;

import com.example.skilllinkbackend.course.entity.Course;
import org.springframework.data.jpa.domain.Specification;

public class CourseSpecification {

    public static Specification<Course> tituloContiene(String titulo) {
        return (root, query, cb) ->
                cb.like(cb.lower(root.get("titulo")), "%" + titulo.toLowerCase() + "%");
    }

    public static Specification<Course> nivelEs(String nivel) {
        return (root, query, cb) ->
                cb.equal(cb.lower(root.get("nivel")), nivel.toLowerCase());
    }

    public static Specification<Course> conCertificacion() {
        return (root, query, cb) ->
                cb.isNotNull(root.get("certificacion"));
    }

    public static Specification<Course> porInstructorId(Long instructorId) {
        return (root, query, cb) ->
                cb.equal(root.get("instructor").get("id"), instructorId);
    }
}

//Puedes añadir más métodos en el futuro como fecha de creación, duración, etc.