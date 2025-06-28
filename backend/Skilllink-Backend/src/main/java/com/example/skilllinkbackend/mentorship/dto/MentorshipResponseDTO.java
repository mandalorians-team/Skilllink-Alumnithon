package com.example.skilllinkbackend.mentorship.dto;

import com.example.skilllinkbackend.learner.dto.LearnerResponse;
import com.example.skilllinkbackend.mentor.dto.MentorResponse;
import com.example.skilllinkbackend.mentorship.entity.Mentorship;

import java.time.LocalDate;
import java.util.List;

public record MentorshipResponseDTO(
        Long id,
        String title,
        String description,
        String category,
        String status,
        LocalDate startDate,
        LocalDate endDate,
        List<String> resources,
        boolean enabled,
        List<MentorResponse> mentors,
        List<LearnerResponse> learners
) {
    public MentorshipResponseDTO(Mentorship mentorship) {
        this(
                mentorship.getId(),
                mentorship.getTitle(),
                mentorship.getDescription(),
                mentorship.getCategory(),
                mentorship.getStatus(),
                mentorship.getStartDate(),
                mentorship.getEndDate(),
                mentorship.getResources(),
                mentorship.isEnabled(),
                mentorship.getMentors().stream().map(MentorResponse::new).toList(),
                mentorship.getLearners().stream().map(LearnerResponse::new).toList()
        );
    }
}
