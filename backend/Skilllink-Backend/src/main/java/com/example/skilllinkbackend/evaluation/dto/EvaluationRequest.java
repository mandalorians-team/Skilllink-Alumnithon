package com.example.skilllinkbackend.evaluation.dto;

import jakarta.validation.constraints.*;

public class EvaluationRequest {
    @NotNull
    private Long evaluatorId;

    @NotNull
    private Long evaluatedId;

    @Min(0)
    @Max(100)
    private int score;

    private String comments;

    // Getters y setters
    public Long getEvaluatorId() {
        return evaluatorId;
    }

    public void setEvaluatorId(Long evaluatorId) {
        this.evaluatorId = evaluatorId;
    }

    public Long getEvaluatedId() {
        return evaluatedId;
    }

    public void setEvaluatedId(Long evaluatedId) {
        this.evaluatedId = evaluatedId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}