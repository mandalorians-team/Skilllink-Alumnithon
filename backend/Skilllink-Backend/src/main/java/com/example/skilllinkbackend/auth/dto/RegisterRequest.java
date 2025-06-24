package com.example.skilllinkbackend.auth.dto;


import com.example.skilllinkbackend.user.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {


    private String username;

    private String password;

    private String email;

    private Role role; // Role (MENTOR, LEARNER)

    // Mentor-specific fields
    private String firstName;

    private String lastName;

    private String photoUrl;

    private String bio;

    private String experience;

    private String education;

    private String linkedinProfile;
}

