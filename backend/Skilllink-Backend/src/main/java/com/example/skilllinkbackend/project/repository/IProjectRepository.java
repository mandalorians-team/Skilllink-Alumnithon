package com.example.skilllinkbackend.project.repository;

import com.example.skilllinkbackend.project.model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IProjectRepository extends JpaRepository<Project, Long> {
    @Query("""
            SELECT p
            FROM Project p
            WHERE p.enabled = true
            """)
    Page<Project> findAll(Pageable pagination);

    @Query("""
            SELECT p
            FROM Project p
            WHERE p.enabled = true AND p.id = :id
            """)
    Optional<Project> findById(Long id);
}
