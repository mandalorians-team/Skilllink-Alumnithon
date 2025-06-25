package com.example.skilllinkbackend.project.validations.edition;

import com.example.skilllinkbackend.mentor.repository.MentorRepository;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import org.springframework.stereotype.Component;

@Component
public class EditionActiveCreatorValidator implements ProjectEditionValidation {
    private final MentorRepository mentorRepository;

    public EditionActiveCreatorValidator(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    @Override
    public void validate(ProjectUpdateDTO projectUpdateDTO) {
        mentorRepository.findById(projectUpdateDTO.creatorId())
                .orElseThrow(() -> new RuntimeException("Creador no encontrado"));
                /*.orElseThrow(() -> new NotFoundException("Creador no encontrado"));*/
    }
}
