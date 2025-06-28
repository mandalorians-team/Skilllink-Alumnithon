// ✅ Entidad Learner refactorizada para persistencia con mejoras
package com.example.skilllinkbackend.learner.entity;

import com.example.skilllinkbackend.mentorship.entity.Mentorship;
import com.example.skilllinkbackend.project.model.Project;
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
public class Learner {

    @Id
    @Column(name = "user_id") // clave primaria vinculada
    private Long learner_id;

    @OneToOne(optional = false)
    @MapsId
    @JoinColumn(name = "user_id")
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

    @ManyToMany(mappedBy = "members")
    private List<Project> projects;

    @ManyToMany(mappedBy = "learners")
    private List<Mentorship> mentorships;
}
