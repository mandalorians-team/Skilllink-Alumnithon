package com.example.skilllinkbackend.mentorship.validations.creation;

import com.example.skilllinkbackend.mentorship.dto.MentorshipRegisterDTO;

public interface MentorshipCreationValidation {
    void validate(MentorshipRegisterDTO mentorshipRegisterDTO);
}
