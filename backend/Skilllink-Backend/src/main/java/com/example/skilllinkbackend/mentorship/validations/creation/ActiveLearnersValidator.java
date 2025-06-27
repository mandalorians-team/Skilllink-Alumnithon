package com.example.skilllinkbackend.mentorship.validations.creation;

import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.learner.repository.LearnerRepository;
import com.example.skilllinkbackend.mentorship.dto.MentorshipRegisterDTO;

import java.util.List;

public class ActiveLearnersValidator implements MentorshipCreationValidation{

    private final LearnerRepository learnerRepository;

    public ActiveLearnersValidator(LearnerRepository learnerRepository) {
        this.learnerRepository = learnerRepository;
    }

    @Override
    public void validate(MentorshipRegisterDTO mentorshipRegisterDTO) {
        List<Learner> existingLearners = learnerRepository.findExistingIds(mentorshipRegisterDTO.learnersId());
        boolean allExist = existingLearners.size() == mentorshipRegisterDTO.learnersId().size();
        if(!allExist) {
            throw new RuntimeException("Al menos un aprendiz no fue encontrado");
        }
    }
}
