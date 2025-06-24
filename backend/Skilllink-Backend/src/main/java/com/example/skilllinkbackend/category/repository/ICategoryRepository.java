package com.example.skilllinkbackend.category.repository;

import com.example.skilllinkbackend.category.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ICategoryRepository extends JpaRepository<Category, Long> {

    @Query("""
            SELECT c
            FROM Category c
            WHERE c.enabled = true
            """)
    Page<Category> findAll(Pageable pagination);

    @Query("""
            SELECT c
            FROM Category c
            WHERE c.enabled = true AND c.id = :id
            """)
    Optional<Category> findById(Long id);

    @Query("""
            SELECT c
            FROM Category c
            WHERE c.enabled = true AND c.id IN :ids
            """)
    List<Category> findExistingIds(List<Long> ids);
}
