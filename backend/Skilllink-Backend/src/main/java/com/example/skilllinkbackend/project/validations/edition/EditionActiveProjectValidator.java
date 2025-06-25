package com.example.skilllinkbackend.project.validations.edition;

import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import com.example.skilllinkbackend.project.repository.IProjectRepository;
import org.springframework.stereotype.Component;

@Component
public class EditionActiveProjectValidator implements ProjectEditionValidation {

    private final IProjectRepository projectRepository;

    public EditionActiveProjectValidator(IProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void validate(ProjectUpdateDTO projectUpdateDTO) {
        projectRepository.findById(projectUpdateDTO.id())
                .orElseThrow(() -> new RuntimeException("Proyecto no encontrado"));
                /*.orElseThrow(() -> new NotFoundException("Proyecto no encontrado"));*/
    }
}
