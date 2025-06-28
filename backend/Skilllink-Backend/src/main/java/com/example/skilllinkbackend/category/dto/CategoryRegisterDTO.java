package com.example.skilllinkbackend.category.dto;

import jakarta.validation.constraints.NotBlank;

public record CategoryRegisterDTO(
        @NotBlank
        String name
) {
}
