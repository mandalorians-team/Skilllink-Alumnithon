package com.example.skilllinkbackend.project.validations.creation;

import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;

public interface ProjectCreationValidation {
    void validate(ProjectRegisterDTO projectRegisterDTO);
}
