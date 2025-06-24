package com.example.skilllinkbackend.mentor.dto;


import lombok.Data;

// This class is a placeholder for the MentorResponse DTO.
@Data
public class MentorResponse {
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

    // Additional fields can be added as needed
}
