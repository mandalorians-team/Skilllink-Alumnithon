package com.example.skilllinkbackend.project.dto;

import com.example.skilllinkbackend.category.dto.CategoryResponseDTO;
import com.example.skilllinkbackend.learner.dto.LearnerResponse;
import com.example.skilllinkbackend.mentor.dto.MentorResponse;
import com.example.skilllinkbackend.project.model.Project;

import java.time.LocalDateTime;
import java.util.List;

public record ProjectResponseDTO(
        Long id,
        MentorResponse creator,
        String name,
        String description,
        LocalDateTime startDate,
        LocalDateTime endDate,
        String visibility,
        boolean enabled,
        List<LearnerResponse> members,
        List<CategoryResponseDTO> categories
) {
    public ProjectResponseDTO(Project project) {
        this(
                project.getId(),
                new MentorResponse(project.getCreator()),
                project.getName(),
                project.getDescription(),
                project.getStartDate(),
                project.getEndDate(),
                project.getVisibility(),
                project.isEnabled(),
                project.getMembers().stream().map(LearnerResponse::new).toList(),
                project.getCategories().stream().map(CategoryResponseDTO::new).toList()
        );
    }
}
