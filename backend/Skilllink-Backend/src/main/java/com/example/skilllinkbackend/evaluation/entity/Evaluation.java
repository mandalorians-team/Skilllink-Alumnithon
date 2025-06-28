package com.example.skilllinkbackend.evaluation.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long evaluatorId;

    private Long evaluatedId;

    @Min(0)
    @Max(100)
    private int score;

    private String comments;

    private LocalDate date;

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}