package com.example.skilllinkbackend.mentor.dto;


import com.example.skilllinkbackend.mentor.entity.Mentor;
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

    public MentorResponse(){}

    public MentorResponse(Mentor mentor) {
        this.id = mentor.getId();
        this.username = mentor.getUser().getUsername();
        this.firstName = mentor.getFirstName();
        this.lastName = mentor.getLastName();
        this.email = mentor.getEmail();
        this.photoUrl = mentor.getPhotoUrl();
        this.bio = mentor.getBio();
        this.experience = mentor.getExperience();
        this.education = mentor.getEducation();
        this.linkedinProfile = mentor.getLinkedinProfile();
    }
}
