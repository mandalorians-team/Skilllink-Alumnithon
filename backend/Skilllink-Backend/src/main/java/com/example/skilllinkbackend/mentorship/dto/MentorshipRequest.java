package com.example.skilllinkbackend.mentorship.dto;

import jakarta.validation.constraints.NotNull;

public class MentorshipRequest {
    @NotNull
    private Long mentorId;

    @NotNull
    private Long learnerId;

    @NotNull
    private String topic;

    private String description;

    // Getters y setters
    public Long getMentorId() {
        return mentorId;
    }

    public void setMentorId(Long mentorId) {
        this.mentorId = mentorId;
    }

    public Long getLearnerId() {
        return learnerId;
    }

    public void setLearnerId(Long learnerId) {
        this.learnerId = learnerId;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}