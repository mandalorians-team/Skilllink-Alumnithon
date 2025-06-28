package com.example.skilllinkbackend.evaluation.repository;

import com.example.skilllinkbackend.evaluation.entity.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
    List<Evaluation> findByEvaluatorIdOrEvaluatedId(Long evaluatorId, Long evaluatedId);
}