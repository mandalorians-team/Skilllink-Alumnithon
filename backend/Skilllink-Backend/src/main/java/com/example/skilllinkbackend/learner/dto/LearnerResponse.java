package com.example.skilllinkbackend.learner.dto;

import lombok.Data;

@Data
public class LearnerResponse {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String photoUrl;
    private String bio;
    private String experience;
    private String education;
    //  private String skills; // Assuming skills is a comma-separated string for simplicity
    private String linkedinProfile;
}
