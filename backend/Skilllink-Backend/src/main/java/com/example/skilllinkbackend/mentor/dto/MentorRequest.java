package com.example.skilllinkbackend.mentor.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;


    private String photoUrl;
    private String bio;
    private String experience;
    private String education;
   // private String skills; // Assuming skills is a comma-separated string for simplicity

/*   @Pattern(regexp = "^(https?://)?(www\\.)?linkedin\\.com/in/[^\\s/$.?#].[^\\s]*$",
           message = "Invalid LinkedIn profile URL")*/
    private String linkedinProfile;




}
