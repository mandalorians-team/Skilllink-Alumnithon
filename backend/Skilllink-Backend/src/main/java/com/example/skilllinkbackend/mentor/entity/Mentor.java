package com.example.skilllinkbackend.mentor.entity;

import com.example.skilllinkbackend.mentorship.entity.Mentorship;
import com.example.skilllinkbackend.user.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mentor {

    @Id
    private Long mentor_id;

    @OneToOne(optional = false)
    @MapsId
    @JoinColumn(name = "mentor_id")
    private User user;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @Email
    @NotBlank
    @Column(unique = true)
    private String email;

    private String photoUrl;

    @Size(max = 500)
    private String bio;

    private String experience;
    private String education;

    @ElementCollection
    private List<String> skills;

    private String linkedinProfile;

    @ManyToMany(mappedBy = "mentors")
    private List<Mentorship> mentorships;
}
