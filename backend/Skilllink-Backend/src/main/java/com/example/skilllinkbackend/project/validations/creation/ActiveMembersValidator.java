package com.example.skilllinkbackend.project.validations.creation;

import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.learner.repository.LearnerRepository;
import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ActiveMembersValidator implements ProjectCreationValidation {

    private final LearnerRepository learnerRepository;

    public ActiveMembersValidator(LearnerRepository learnerRepository) {
        this.learnerRepository = learnerRepository;
    }

    @Override
    public void validate(ProjectRegisterDTO projectRegisterDTO) {
        List<Learner> existingEmails = learnerRepository.findExistingEmails(projectRegisterDTO.members());
        boolean allExist = existingEmails.size() == projectRegisterDTO.members().size();

        if (!allExist) {
            throw new RuntimeException("Al menos un miembro del proyecto no existe");
            /*throw new NotFoundException("Al menos un miembro del proyecto no existe");*/
        }
    }
}
