package com.example.skilllinkbackend.mentor.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
// This class is a placeholder for the MentorRequest DTO.
public class MentorRequest {
    private Long userId; // Assuming this is the ID of the User entity
    private String username;
    private String password;
    private String passwordConfirmation;
    private String firstName;
    private String lastName;
    private String email;
    private String photoUrl;
    private String bio;
    private String experience;
    private String education;
   // private String skills; // Assuming skills is a comma-separated string for simplicity
    private String linkedinProfile;




}
