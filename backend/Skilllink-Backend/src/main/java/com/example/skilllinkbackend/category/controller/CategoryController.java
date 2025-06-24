package com.example.skilllinkbackend.category.controller;

import com.example.skilllinkbackend.category.dto.CategoryRegisterDTO;
import com.example.skilllinkbackend.category.dto.CategoryResponseDTO;
import com.example.skilllinkbackend.category.dto.CategoryUpdateDTO;
import com.example.skilllinkbackend.category.service.ICategoryService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final ICategoryService categoryService;

    public CategoryController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    @Transactional
    public ResponseEntity<CategoryResponseDTO> createCategory(
            @RequestBody @Valid CategoryRegisterDTO categoryRegisterDTO,
            UriComponentsBuilder uriComponentsBuilder
    ) {
        CategoryResponseDTO categoryResponseDTO = categoryService.createCategory(categoryRegisterDTO);
        URI url = uriComponentsBuilder.path("/categories/{id}").buildAndExpand(categoryResponseDTO.id()).toUri();
        return ResponseEntity.created(url).body(categoryResponseDTO);
    }

    @GetMapping
    public Map<String, Object> getCategories(@PageableDefault(size = 10, sort = "id") Pageable pagination) {
        Page<CategoryResponseDTO> categoryPage = categoryService.getCategories(pagination);
        Map<String, Object> response = new HashMap<>();
        response.put("content", categoryPage.getContent());
        response.put("currentPage", categoryPage.getNumber());
        response.put("totalItems", categoryPage.getTotalElements());
        response.put("totalPages", categoryPage.getTotalPages());
        response.put("pageSize", categoryPage.getSize());
        response.put("hasNext", categoryPage.hasNext());
        response.put("hasPrevious", categoryPage.hasPrevious());
        return response;
    }

    @GetMapping("/{id}")
    public CategoryResponseDTO findById(@PathVariable Long id) {
        return categoryService.findById(id);
    }

    @PutMapping("/{id}")
    @Transactional
    public CategoryResponseDTO updateCategory(
            @PathVariable Long id,
            @RequestBody @Valid CategoryUpdateDTO categoryUpdateDTO) {
        return categoryService.updateCategory(id, categoryUpdateDTO);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }
}
