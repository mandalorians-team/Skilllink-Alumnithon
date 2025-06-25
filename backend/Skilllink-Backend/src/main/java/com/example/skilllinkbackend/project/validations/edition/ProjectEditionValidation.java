package com.example.skilllinkbackend.project.validations.edition;

import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;

public interface ProjectEditionValidation {
    void validate(ProjectUpdateDTO projectUpdateDTO);
}
