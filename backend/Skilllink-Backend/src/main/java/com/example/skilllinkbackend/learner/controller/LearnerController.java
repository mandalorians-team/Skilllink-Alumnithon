package com.example.skilllinkbackend.learner.controller;

import com.example.skilllinkbackend.learner.dto.LearnerRequest;
import com.example.skilllinkbackend.learner.dto.LearnerResponse;
import com.example.skilllinkbackend.learner.service.LearnerService;
import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/learners")
public class LearnerController {

    private final LearnerService learnerService;
    public LearnerController(LearnerService learnerService) {
        this.learnerService = learnerService;
    }




    /**
     * Endpoint to get all learners.
     *
     * @return List of all learners.
     */
    @GetMapping
    public ResponseEntity<List<LearnerResponse>> getAllLearners() {
        List<LearnerResponse> learners = learnerService.getAllLearners();
        return ResponseEntity.ok(learners);
    }

    /**
     * Endpoint to get a learner by ID.
     *
     * @param id The ID of the learner.
     * @return The learner profile if found, otherwise 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<LearnerResponse> getLearnerById(@PathVariable Long id) {
        LearnerResponse learner = learnerService.getLearnerProfile(id);
        if (learner == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(learner);

    }

    /**
     * Endpoint to create a new learner profile.
     *
     * @param learnerRequest The request containing learner details.
     * @return The created learner profile.
     */
    @Hidden
    @PostMapping("/create")
    public ResponseEntity<LearnerResponse> createLearnerProfile(@RequestBody LearnerRequest learnerRequest) {
        LearnerResponse createdLearner = learnerService.createLearnerProfile(learnerRequest);
        return ResponseEntity.status(201).body(createdLearner);
    }

    /**
     * Endpoint to update an existing learner profile.
     *
     * @param id The ID of the learner to update.
     * @param learnerRequest The request containing updated learner details.
     * @return The updated learner profile if successful, otherwise 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<LearnerResponse> updateLearnerProfile(@PathVariable Long id, @RequestBody LearnerRequest learnerRequest) {
        LearnerResponse updatedLearner = learnerService.updateLearnerProfile(id, learnerRequest);
        if (updatedLearner == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedLearner);
    }

    /**
     * Endpoint to delete a learner profile by ID.
     *
     * @param id The ID of the learner to delete.
     * @return 204 No Content if deletion was successful, otherwise 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLearnerProfile(@PathVariable Long id) {
        learnerService.deleteLearnerProfile(id);
        return ResponseEntity.noContent().build();
    }


}
