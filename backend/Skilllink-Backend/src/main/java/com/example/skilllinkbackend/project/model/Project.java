package com.example.skilllinkbackend.project.model;

import com.example.skilllinkbackend.category.model.Category;
import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Table(name = "project")
@Entity(name = "Project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private Mentor creator;

    private String name;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String visibility;
    private boolean enabled = true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_project",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<Learner> members;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "project_category",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;

    public Project() {
    }

    public Project(ProjectRegisterDTO projectRegisterDTO, Mentor creator, List<Learner> members, List<Category> categories) {
        this.creator = creator;
        this.name = projectRegisterDTO.name();
        this.description = projectRegisterDTO.description();
        this.startDate = projectRegisterDTO.startDate();
        this.endDate = projectRegisterDTO.endDate();
        this.visibility = projectRegisterDTO.visibility();
        this.members = members;
        this.categories = categories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Mentor getCreator() {
        return creator;
    }

    public void setCreator(Mentor creator) {
        this.creator = creator;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public String getVisibility() {
        return visibility;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<Learner> getMembers() {
        return members;
    }

    public void setMembers(List<Learner> members) {
        this.members = members;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public void update(ProjectUpdateDTO projectUpdateDTO, Mentor creator, List<Learner> members, List<Category> categories) {
        this.id = projectUpdateDTO.id();
        this.creator = creator;
        this.name = projectUpdateDTO.name();
        this.description = projectUpdateDTO.description();
        this.startDate = projectUpdateDTO.startDate();
        this.endDate = projectUpdateDTO.endDate();
        this.visibility = projectUpdateDTO.visibility();
        this.members = members;
        this.categories = categories;
    }

    public void deactive() {
        this.enabled = false;
    }
}
