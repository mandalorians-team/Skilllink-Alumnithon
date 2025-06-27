package com.example.skilllinkbackend.mentorship.service;

import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.learner.repository.LearnerRepository;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.mentor.repository.MentorRepository;
import com.example.skilllinkbackend.mentorship.dto.MentorshipRegisterDTO;
import com.example.skilllinkbackend.mentorship.dto.MentorshipResponseDTO;
import com.example.skilllinkbackend.mentorship.entity.Mentorship;
import com.example.skilllinkbackend.mentorship.repository.MentorshipRepository;
import com.example.skilllinkbackend.mentorship.validations.creation.MentorshipCreationValidation;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MentorshipService {
    private final MentorshipRepository mentorshipRepository;
    private final List<MentorshipCreationValidation> creationValidators;
    private final MentorRepository mentorRepository;
    private final LearnerRepository learnerRepository;

    public MentorshipService(
            MentorshipRepository mentorshipRepository,
            List<MentorshipCreationValidation> creationValidators,
            MentorRepository mentorRepository,
            LearnerRepository learnerRepository) {
        this.mentorshipRepository = mentorshipRepository;
        this.creationValidators = creationValidators;
        this.mentorRepository = mentorRepository;
        this.learnerRepository = learnerRepository;
    }

    public MentorshipResponseDTO createMentorship(MentorshipRegisterDTO request) {
        creationValidators.forEach(v -> v.validate(request));
        List<Mentor> mentors = mentorRepository.findExistingIds(request.mentorsId());
        List<Learner> learners = learnerRepository.findExistingIds(request.learnersId());

        Mentorship mentorship = new Mentorship(request, mentors, learners);
        // Aquí debes usar setMentor(User) y setMentee(User) si usas relaciones JPA
        return new MentorshipResponseDTO(mentorshipRepository.save(mentorship));
    }

    /*public List<Mentorship> getMentorshipsByUser(Long userId) {
        return mentorshipRepository.findByMentorIdOrLearnerId(userId, userId);
    }*/

    public List<MentorshipResponseDTO> getAllMentorships() {
        return mentorshipRepository.findAll().stream().map(MentorshipResponseDTO::new).toList();
    }

    public MentorshipResponseDTO findById(Long id) {
        Mentorship mentorship = mentorshipRepository.findById(id).
                orElseThrow(() -> new EntityNotFoundException("Mentoría no encontrada"));
        return new MentorshipResponseDTO(mentorship);
    }
}