package com.example.skilllinkbackend.mentorship.repository;

import com.example.skilllinkbackend.mentorship.entity.Mentorship;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MentorshipRepository extends JpaRepository<Mentorship, Long> {
    //List<Mentorship> findByMentorIdOrLearnerId(Long mentorId, Long learnerId);
}