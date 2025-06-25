package com.example.skilllinkbackend.project.validations.creation;

import com.example.skilllinkbackend.mentor.repository.MentorRepository;
import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import org.springframework.stereotype.Component;

@Component
public class ActiveCreatorValidator implements ProjectCreationValidation {

    private final MentorRepository mentorRepository;

    public ActiveCreatorValidator(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    @Override
    public void validate(ProjectRegisterDTO projectRegisterDTO) {
        mentorRepository.findById(projectRegisterDTO.creatorId())
                .orElseThrow(() -> new RuntimeException("Creador no encontrado"));
                /*.orElseThrow(() -> new NotFoundException("Creador no encontrado"));*/
    }
}
