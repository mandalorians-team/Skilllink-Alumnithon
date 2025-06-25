package com.example.skilllinkbackend.category.model;

import com.example.skilllinkbackend.category.dto.CategoryRegisterDTO;
import com.example.skilllinkbackend.category.dto.CategoryUpdateDTO;
import com.example.skilllinkbackend.project.model.Project;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "category")
@Entity(name = "Category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "categories")
    private List<Project> projects;

    private boolean enabled = true;

    public Category() {
    }

    public Category(CategoryRegisterDTO categoryRegisterDTO) {
        this.name = categoryRegisterDTO.name();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void update(CategoryUpdateDTO categoryDTO) {
        this.id = categoryDTO.id();
        this.name = categoryDTO.name();
    }

    public void deactive() {
        this.enabled = false;
    }
}
