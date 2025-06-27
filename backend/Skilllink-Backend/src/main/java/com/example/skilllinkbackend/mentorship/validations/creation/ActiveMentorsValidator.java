package com.example.skilllinkbackend.mentorship.validations.creation;

import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.mentor.repository.MentorRepository;
import com.example.skilllinkbackend.mentorship.dto.MentorshipRegisterDTO;

import java.util.List;

public class ActiveMentorsValidator implements MentorshipCreationValidation{

    private final MentorRepository mentorRepository;

    public ActiveMentorsValidator(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    @Override
    public void validate(MentorshipRegisterDTO mentorshipRegisterDTO) {
        List<Mentor> existingMentors = mentorRepository.findExistingIds(mentorshipRegisterDTO.mentorsId());
        boolean allExist = existingMentors.size() == mentorshipRegisterDTO.mentorsId().size();
        if(!allExist) {
            throw new RuntimeException("Al menos un mentor no fue encontrado");
        }
    }
}
