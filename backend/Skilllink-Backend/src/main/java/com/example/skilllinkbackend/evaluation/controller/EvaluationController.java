package com.example.skilllinkbackend.evaluation.controller;

import com.example.skilllinkbackend.evaluation.dto.EvaluationRequest;
import com.example.skilllinkbackend.evaluation.entity.Evaluation;
import com.example.skilllinkbackend.evaluation.service.EvaluationService;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {
    private final EvaluationService evaluationService;

    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @PostMapping
    public Evaluation create(@RequestBody @Valid EvaluationRequest request) {
        return evaluationService.createEvaluation(request);
    }

    @GetMapping("/by-user/{id}")
    public List<Evaluation> getByUser(@PathVariable Long id) {
        return evaluationService.getEvaluationsByUser(id);
    }
}