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



    @Transactional
    public MentorResponse createMentorProfile(MentorRequest mentorRequest) {
        // Validate the request, e.g., check if the user already exists
        if (userRepository.existsByUsername(mentorRequest.getUsername())) {
            throw new RuntimeException("User with this username already exists");
        }
        if (userRepository.existsByEmail(mentorRequest.getEmail())) {
            throw new RuntimeException("User with this email already exists");
        }
        // Create a new User entity from the request
        User user = new User();
        user.setUsername(mentorRequest.getUsername());
        user.setPassword(passwordEncoder.encode(mentorRequest.getPassword()));
        user.setEmail(mentorRequest.getEmail());
        user.setRole(Role.MENTOR);
        userRepository.save(user);

        // Map MentorRequest to Mentor entity
        Mentor mentor = mapToMentorEntity(mentorRequest, user);

        // Save the mentor entity
        mentorRepository.save(mentor);

        // Return a response DTO
        return mapToMentorResponse(mentor);
    }

    @Transactional
    public MentorResponse updateMentorProfile(Long mentorId, MentorRequest mentorRequest) {
        // Find the existing mentor profile
        Mentor mentor = mentorRepository.findById(mentorId)
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        // Update the mentor profile with new data
        mentor.setFirstName(mentorRequest.getFirstName());
        mentor.setLastName(mentorRequest.getLastName());
        mentor.setEmail(mentorRequest.getEmail());
        mentor.setPhotoUrl(mentorRequest.getPhotoUrl());
        mentor.setBio(mentorRequest.getBio());
        mentor.setExperience(mentorRequest.getExperience());
        mentor.setEducation(mentorRequest.getEducation());
       // mentor.setSkills(List.of(mentorRequest.getSkills().split(","))); // Assuming skills are comma-separated
        mentor.setLinkedinProfile(mentorRequest.getLinkedinProfile());

        // Save the updated mentor entity
        mentorRepository.save(mentor);

        // Return a response DTO
        return mapToMentorResponse(mentor);
    }

    public MentorResponse getMentorProfile(Long mentorId) {
        // Retrieve the mentor profile by ID
        Mentor mentor = mentorRepository.findById(mentorId)
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        // Map the Mentor entity to a response DTO
        return mapToMentorResponse(mentor);
    }

    public MentorResponse getMentorProfileByEmail(String email) {
        // Retrieve the mentor profile by username
        Mentor mentor = mentorRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        // Map the Mentor entity to a response DTO
        return mapToMentorResponse(mentor);
    }

    public List<MentorResponse> getAllMentors() {
        // Retrieve all mentor profiles
        List<Mentor> mentors = mentorRepository.findAll();

        // Map the list of Mentor entities to a list of response DTOs
        return mentors.stream()
                .map(this::mapToMentorResponse)
                .toList();
    }

//    public List<MentorResponse> getMentorsBySkill(String skill) {
//        // Retrieve mentors by skill
//        List<Mentor> mentors = mentorRepository.findBySkillsContaining(skill);
//
//        // Map the list of Mentor entities to a list of response DTOs
//        return mentors.stream()
//                .map(this::mapToMentorResponse)
//                .toList();
//    }



    @Transactional
    public void deleteMentorProfile(Long mentorId) {
        // Check if the mentor exists
        if (!mentorRepository.existsById(mentorId)) {
            throw new RuntimeException("Mentor not found");
        }

        // Delete the mentor profile
        mentorRepository.deleteById(mentorId);
    }




    //Helper methods to convert MentorRequest to Mentor entity and vice versa
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
    private List<String> parseSkills(String skills) {
        if (skills == null || skills.isBlank()) {
            return List.of();
        }
        return List.of(skills.split(","));
    }



}
