package com.example.skilllinkbackend.mentorship.entity;

import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.mentorship.dto.MentorshipRegisterDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Mentorship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String category;
    private String status;
    private LocalDate startDate;
    private LocalDate endDate;

    @ElementCollection // genera una tabla intermedia: mentorship_resources
    private List<String> resources;

    private boolean enabled = true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "mentorship_mentor",
            joinColumns = @JoinColumn(name = "mentorship_id"),
            inverseJoinColumns = @JoinColumn(name = "mentor_id")
    )
    private List<Mentor> mentors;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "mentorship_learner",
            joinColumns = @JoinColumn(name = "mentorship_id"),
            inverseJoinColumns = @JoinColumn(name = "learner_id")
    )
    private List<Learner> learners;

    public Mentorship(MentorshipRegisterDTO request, List<Mentor> mentors,  List<Learner> learners) {
        this.title = request.title();
        this.description = request.description();
        this.category = request.category();
        this.status = request.status();
        this.startDate = request.startDate();
        this.endDate = request.endDate();
        this.resources = request.resources();
        this.mentors = mentors;
        this.learners = learners;
    }

}