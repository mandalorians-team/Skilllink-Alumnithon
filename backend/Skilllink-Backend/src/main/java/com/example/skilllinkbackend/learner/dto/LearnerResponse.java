package com.example.skilllinkbackend.learner.dto;

import com.example.skilllinkbackend.learner.entity.Learner;
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

    public LearnerResponse() {}

    public LearnerResponse(Learner learner) {
        this.id = learner.getId();
        this.username = learner.getUser().getUsername();
        this.firstName = learner.getFirstName();
        this.lastName = learner.getLastName();
        this.email = learner.getEmail();
        this.photoUrl = learner.getPhotoUrl();
        this.bio = learner.getBio();
        this.experience = learner.getExperience();
        this.education = learner.getEducation();
        this.linkedinProfile = learner.getLinkedinProfile();
    }
}
