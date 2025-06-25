package com.example.skilllinkbackend.mentorship.service;

import com.example.skilllinkbackend.mentorship.dto.MentorshipRequest;
import com.example.skilllinkbackend.mentorship.entity.Mentorship;
import com.example.skilllinkbackend.mentorship.repository.MentorshipRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MentorshipService {
    private final MentorshipRepository mentorshipRepository;

    public MentorshipService(MentorshipRepository mentorshipRepository) {
        this.mentorshipRepository = mentorshipRepository;
    }

    public Mentorship createMentorship(MentorshipRequest request) {
        Mentorship mentorship = new Mentorship();
        // Aquí debes usar setMentor(User) y setMentee(User) si usas relaciones JPA
        return mentorshipRepository.save(mentorship);
    }

    public List<Mentorship> getMentorshipsByUser(Long userId) {
        return mentorshipRepository.findByMentorIdOrLearnerId(userId, userId);
    }

    public List<Mentorship> getAllMentorships() {
        return mentorshipRepository.findAll();
    }
}