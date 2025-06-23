package com.example.skilllinkbackend.learner.service;

import com.example.skilllinkbackend.learner.dto.LearnerRequest;
import com.example.skilllinkbackend.learner.dto.LearnerResponse;
import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.learner.repository.LearnerRepository;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.model.Role;
import com.example.skilllinkbackend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LearnerService {

    private final LearnerRepository learnerRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public LearnerService(LearnerRepository learnerRepository, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.learnerRepository = learnerRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }


    /**
     * Creates a new learner profile.
     *
     * @param learnerRequest The request containing learner details.
     * @return The created learner profile response.
     */
    @Transactional
    public LearnerResponse createLearnerProfile(LearnerRequest learnerRequest) {
        User user = userRepository.findById(learnerRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        System.out.println("Creating learner profile for user ID: " + user.getId()); // Debug Log

        Learner learner = mapToLearnerEntity(learnerRequest, user);
        learnerRepository.save(learner);

        System.out.println("Mentor saved with ID: " + learner.getId()); // Debug Log
        System.out.println("Mentor user: " + learner.getUser());

        return mapToLearnerResponse(learner);
    }

    /**
     * Updates an existing learner profile.
     *
     * @param learberId The ID of the learner to update.
     * @param learnerRequest The request containing updated learner details.
     * @return The updated learner profile response.
     */
    @Transactional
    public LearnerResponse updateLearnerProfile(Long learberId, LearnerRequest learnerRequest) {
        Learner learner = learnerRepository.findById(learberId)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        learner.setFirstName(learnerRequest.getFirstName());
        learner.setLastName(learnerRequest.getLastName());
        learner.setEmail(learnerRequest.getEmail());
        learner.setPhotoUrl(learnerRequest.getPhotoUrl());
        learner.setBio(learnerRequest.getBio());
        learner.setExperience(learnerRequest.getExperience());
        learner.setEducation(learnerRequest.getEducation());
        learner.setLinkedinProfile(learnerRequest.getLinkedinProfile());

        learnerRepository.save(learner);
        return mapToLearnerResponse(learner);
    }

    /**
     * Retrieves all learner profiles.
     *
     * @return A list of all learner profiles.
     */
    public List<LearnerResponse> getAllLearners() {
        List<Learner> learners = learnerRepository.findAllLearners();

        return learners.stream()
                .map(this::mapToLearnerResponse)
                .toList();

    }

    /**
     * Retrieves a learner profile by ID.
     *
     * @param learnerId The ID of the learner to retrieve.
     * @return The learner profile response.
     */
    public LearnerResponse getLearnerProfile(Long learnerId) {
        Learner learner = learnerRepository.findById(learnerId)
                .orElseThrow(() -> new RuntimeException("Learner not found"));
        return mapToLearnerResponse(learner);
    }

    /**
     * Retrieves a learner profile by email.
     *
     * @param email The email of the learner to retrieve.
     * @return The learner profile response.
     */
    public LearnerResponse getLearnerProfileByEmail(String email) {
        Learner learner = learnerRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Learner not found"));
        return mapToLearnerResponse(learner);
    }

    /**
     * Deletes a learner profile by ID.
     *
     * @param learnerId The ID of the learner to delete.
     */
    @Transactional
    public void deleteLearnerProfile(Long learnerId) {
        Learner learner = learnerRepository.findById(learnerId)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        // Optionally, you can also delete the associated user
        User user = learner.getUser();
        if (user != null) {
            user.setRole(null); // Remove the role
            userRepository.save(user);
        }

        learnerRepository.delete(learner);
    }



    //helper methods to map DTOs to entities and vice versa

    /**
     * Maps LearnerRequest to Learner entity.
     *
     * @param learnerRequest The request containing learner details.
     * @param user The user associated with the learner.
     * @return The mapped Learner entity.
     */
    private Learner mapToLearnerEntity(LearnerRequest learnerRequest, User user) {
        Learner learner = new Learner();
        learner.setUser(user);
        learner.setFirstName(learnerRequest.getFirstName());
        learner.setLastName(learnerRequest.getLastName());
        learner.setEmail(learnerRequest.getEmail());
        learner.setPhotoUrl(learnerRequest.getPhotoUrl());
        learner.setBio(learnerRequest.getBio());
        learner.setExperience(learnerRequest.getExperience());
        learner.setEducation(learnerRequest.getEducation());
        learner.setLinkedinProfile(learnerRequest.getLinkedinProfile());
        return learner;
    }

    /**
     * Maps Learner entity to LearnerResponse DTO.
     *
     * @param learner The learner entity to map.
     * @return The mapped LearnerResponse DTO.
     */
    private LearnerResponse mapToLearnerResponse(Learner learner) {
        LearnerResponse response = new LearnerResponse();
        response.setId(learner.getId());
        response.setUsername(learner.getUser().getUsername());
        response.setFirstName(learner.getFirstName());
        response.setLastName(learner.getLastName());
        response.setEmail(learner.getEmail());
        response.setPhotoUrl(learner.getPhotoUrl());
        response.setBio(learner.getBio());
        response.setExperience(learner.getExperience());
        response.setEducation(learner.getEducation());
        response.setLinkedinProfile(learner.getLinkedinProfile());
        return response;
    }
}
