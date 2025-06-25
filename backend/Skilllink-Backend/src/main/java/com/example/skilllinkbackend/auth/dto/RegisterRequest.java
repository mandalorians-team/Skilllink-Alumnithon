package com.example.skilllinkbackend.auth.dto;


import com.example.skilllinkbackend.user.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {


    @NotBlank(message = "Username must not be blank")
    private String username;

    @NotBlank(message = "Password must not be blank")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    @NotBlank(message = "Email must not be blank")
    @Email(message = "Invalid email format")
    private String email;

    private Role role; // Role (MENTOR, LEARNER)

    // Mentor-specific fields
    private String firstName;

    private String lastName;

    private String photoUrl;

    private String bio;

    private String experience;

    private String education;

    //validations
    @Pattern(regexp = "^(https?://)?(www\\.)?linkedin\\.com/in/[^\\s/$.?#].[^\\s]*$",
             message = "Invalid LinkedIn profile URL")
    private String linkedinProfile;
}

