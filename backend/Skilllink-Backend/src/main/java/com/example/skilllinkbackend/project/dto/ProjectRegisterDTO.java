package com.example.skilllinkbackend.project.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;

public record ProjectRegisterDTO(

        @NotNull
        Long creatorId,

        @NotBlank
        String name,

        @NotBlank
        String description,

        @NotNull
        LocalDateTime startDate,

        @NotNull
        LocalDateTime endDate,

        @NotBlank
        String visibility,

        // correos de los miembros
        List<String> members,
        List<Long> categoriesId
) {
}
