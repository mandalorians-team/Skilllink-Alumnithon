package com.example.skilllinkbackend.evaluation.service;

import com.example.skilllinkbackend.evaluation.dto.EvaluationRequest;
import com.example.skilllinkbackend.evaluation.entity.Evaluation;
import com.example.skilllinkbackend.evaluation.repository.EvaluationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EvaluationService {
    private final EvaluationRepository evaluationRepository;

    public EvaluationService(EvaluationRepository evaluationRepository) {
        this.evaluationRepository = evaluationRepository;
    }

    public Evaluation createEvaluation(EvaluationRequest request) {
        Evaluation evaluation = new Evaluation();
        evaluation.setEvaluatorId(request.getEvaluatorId());
        evaluation.setEvaluatedId(request.getEvaluatedId());
        evaluation.setScore(request.getScore());
        evaluation.setComments(request.getComments());
        evaluation.setDate(LocalDate.now());
        return evaluationRepository.save(evaluation);
    }

    public List<Evaluation> getEvaluationsByUser(Long userId) {
        return evaluationRepository.findByEvaluatorIdOrEvaluatedId(userId, userId);
    }
}