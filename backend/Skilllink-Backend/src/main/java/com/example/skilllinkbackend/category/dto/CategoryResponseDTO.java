package com.example.skilllinkbackend.category.dto;


import com.example.skilllinkbackend.category.model.Category;

public record CategoryResponseDTO(
        Long id,
        String name,
        boolean enabled
) {
    public CategoryResponseDTO(Category category) {
        this(
                category.getId(),
                category.getName(),
                category.isEnabled()
        );
    }
}
