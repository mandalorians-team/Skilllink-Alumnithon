package com.example.skilllinkbackend.category.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record CategoryUpdateDTO(
        @NotNull
        @Positive(message = "El id debe ser un número positivo")
        Long id,

        @NotBlank
        String name
) {
}
