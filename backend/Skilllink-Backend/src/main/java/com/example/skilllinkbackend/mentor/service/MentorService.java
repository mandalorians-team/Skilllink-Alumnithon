package com.example.skilllinkbackend.mentor.service;


import com.example.skilllinkbackend.mentor.dto.MentorRequest;
import com.example.skilllinkbackend.mentor.dto.MentorResponse;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.mentor.repository.MentorRepository;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.model.Role;
import com.example.skilllinkbackend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service class for managing mentor profiles.
 * Provides methods to create, update, retrieve, and delete mentor profiles.
 */
@Service
public class MentorService {

    private final MentorRepository mentorRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public MentorService(MentorRepository mentorRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.mentorRepository = mentorRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }



    /**
     * Creates a new mentor profile.
     *
     * @param mentorRequest The request containing mentor details.
     * @return The created mentor profile response.
     */
    @Transactional
    public MentorResponse createMentorProfile(MentorRequest mentorRequest) {
        User user = userRepository.findById(mentorRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        System.out.println("Creating mentor profile for user ID: " + user.getId()); // Debug Log

        Mentor mentor = mapToMentorEntity(mentorRequest, user);
        mentorRepository.save(mentor);

        System.out.println("Mentor saved with ID: " + mentor.getId()); // Debug Log
        System.out.println("Mentor user: " + mentor.getUser());

        return mapToMentorResponse(mentor);
    }


    /**
     * Updates an existing mentor profile.
     *
     * @param mentorId The ID of the mentor to update.
     * @param mentorRequest The request containing updated mentor details.
     * @return The updated mentor profile response.
     */
    @Transactional
    public MentorResponse updateMentorProfile(Long mentorId, MentorRequest mentorRequest) {
        User user = userRepository.findById(mentorRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        System.out.println("Saving mentor for user ID: " + user.getId()); // Debug log
        if (user.getRole() == null || user.getRole() != Role.MENTOR) {
            user.setRole(Role.MENTOR);
            userRepository.save(user);
        }

        Mentor mentor = mapToMentorEntity(mentorRequest, user);
        mentorRepository.save(mentor);

        System.out.println("Mentor saved with ID: " + mentor.getId()); // Debug log
        return mapToMentorResponse(mentor);

    }

    /**
     * Retrieves a mentor profile by ID.
     *
     * @param mentorId The ID of the mentor to retrieve.
     * @return The mentor profile response.
     */
    public MentorResponse getMentorProfile(Long mentorId) {
        // Retrieve the mentor profile by ID
        Mentor mentor = mentorRepository.findById(mentorId)
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        // Map the Mentor entity to a response DTO
        return mapToMentorResponse(mentor);
    }

    /**
     * Retrieves a mentor profile by email.
     *
     * @param email The email of the mentor to retrieve.
     * @return The mentor profile response.
     */
    public MentorResponse getMentorProfileByEmail(String email) {
        // Retrieve the mentor profile by username
        Mentor mentor = mentorRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        // Map the Mentor entity to a response DTO
        return mapToMentorResponse(mentor);
    }

    /**
     * Retrieves all mentor profiles.
     *
     * @return A list of mentor profile responses.
     */
    public List<MentorResponse> getAllMentors() {
        List<Mentor> mentors = mentorRepository.findAllMentors();
        return mentors.stream()
                .map(this::mapToMentorResponse)
                .toList();
    }




    /**
     * Deletes a mentor profile by ID.
     *
     * @param mentorId The ID of the mentor to delete.
     */
    @Transactional
    public void deleteMentorProfile(Long mentorId) {
        // Find the mentor profile by ID
        Mentor mentor = mentorRepository.findById(mentorId)
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        // Optionally, you can also delete the associated user
        User user = mentor.getUser();
        if (user != null) {
            user.setRole(null); // Remove the role
            userRepository.save(user);
        }

        // Delete the mentor profile
        mentorRepository.delete(mentor);
    }




    //Helper methods to convert MentorRequest to Mentor entity and vice versa
    /**
     * Maps MentorRequest to Mentor entity.
     *
     * @param mentorRequest The request containing mentor details.
     * @param user The user associated with the mentor.
     * @return The mapped Mentor entity.
     */
    private Mentor mapToMentorEntity(MentorRequest mentorRequest, User user) {
        Mentor mentor = new Mentor();
        mentor.setUser(user);
        mentor.setFirstName(mentorRequest.getFirstName());
        mentor.setLastName(mentorRequest.getLastName());
        mentor.setEmail(mentorRequest.getEmail());
        mentor.setPhotoUrl(mentorRequest.getPhotoUrl());
        mentor.setBio(mentorRequest.getBio());
        mentor.setExperience(mentorRequest.getExperience());
        mentor.setEducation(mentorRequest.getEducation());
      //  mentor.setSkills(parseSkills(mentorRequest.getSkills())); // Assuming skills are comma-separated
        mentor.setLinkedinProfile(mentorRequest.getLinkedinProfile());

        return mentor;
    }

    /**
     * Maps Mentor entity to MentorResponse DTO.
     *
     * @param mentor The mentor entity to map.
     * @return The mapped MentorResponse DTO.
     */
    private MentorResponse mapToMentorResponse(Mentor mentor) {
        MentorResponse response = new MentorResponse();
        response.setId(mentor.getId());
        response.setUsername(mentor.getUser().getUsername());
        response.setFirstName(mentor.getFirstName());
        response.setLastName(mentor.getLastName());
        response.setEmail(mentor.getEmail());
        response.setPhotoUrl(mentor.getPhotoUrl());
        response.setBio(mentor.getBio());
        response.setExperience(mentor.getExperience());
        response.setEducation(mentor.getEducation());
       // response.setSkills(String.join(",", mentor.getSkills())); // Assuming skills are stored as a comma-separated string
        response.setLinkedinProfile(mentor.getLinkedinProfile());

        return response;
    }

    // Utility method
    /**
     * Parses a comma-separated string of skills into a list.
     *
     * @param skills The comma-separated string of skills.
     * @return A list of skills.
     */
    private List<String> parseSkills(String skills) {
        if (skills == null || skills.isBlank()) {
            return List.of();
        }
        return List.of(skills.split(","));
    }



}
