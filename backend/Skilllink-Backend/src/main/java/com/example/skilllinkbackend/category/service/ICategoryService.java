package com.example.skilllinkbackend.category.service;

import com.example.skilllinkbackend.category.dto.CategoryRegisterDTO;
import com.example.skilllinkbackend.category.dto.CategoryResponseDTO;
import com.example.skilllinkbackend.category.dto.CategoryUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;



public interface ICategoryService {
    CategoryResponseDTO createCategory(CategoryRegisterDTO categoryDTO);

    Page<CategoryResponseDTO> getCategories(Pageable pagination);

    CategoryResponseDTO findById(Long id);

    CategoryResponseDTO updateCategory(Long id, CategoryUpdateDTO categoryDTO);

    void deleteCategory(Long id);
}
