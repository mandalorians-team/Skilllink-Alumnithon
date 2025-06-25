package com.example.skilllinkbackend.project.validations.edition;

import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.learner.repository.LearnerRepository;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EditionActiveMembersValidator implements ProjectEditionValidation {
    private final LearnerRepository learnerRepository;

    public EditionActiveMembersValidator(LearnerRepository learnerRepository) {
        this.learnerRepository = learnerRepository;
    }

    @Override
    public void validate(ProjectUpdateDTO projectUpdateDTO) {
        List<Learner> existingEmails = learnerRepository.findExistingEmails(projectUpdateDTO.members());
        boolean allExist = existingEmails.size() == projectUpdateDTO.members().size();

        if (!allExist) {
            throw new RuntimeException("Al menos un miembro del proyecto no existe");
            /*throw new NotFoundException("Al menos un miembro del proyecto no existe");*/
        }
    }
}
