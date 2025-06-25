package com.example.skilllinkbackend.learner.entity;

import com.example.skilllinkbackend.project.model.Project;
import com.example.skilllinkbackend.user.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Learner {

    @Id
    private Long id;

    @OneToOne
    @MapsId
    private User user;

    private String firstName;
    private String lastName;
    private String email;
    private String photoUrl;
    private String bio;
    private String experience;
    private String education;
    //    private List<String> skills;
    private String linkedinProfile;

    @ManyToMany(mappedBy = "members")
    private List<Project> projects;
}
