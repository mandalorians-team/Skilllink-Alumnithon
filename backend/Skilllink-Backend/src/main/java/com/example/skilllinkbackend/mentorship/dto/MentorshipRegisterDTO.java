package com.example.skilllinkbackend.mentorship.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

public record MentorshipRegisterDTO(
        @NotBlank
        String title,

        @NotBlank
        String description,

        @NotBlank
        String category,

        @NotBlank
        String status,

        @NotNull
        LocalDate startDate,

        @NotNull
        LocalDate endDate,
        List<String> resources,
        List<Long> mentorsId,
        List<Long> learnersId
) {
}
