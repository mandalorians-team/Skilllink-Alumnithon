package com.example.skilllinkbackend.mentor.repository;

import com.example.skilllinkbackend.mentor.entity.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Long> {
    // Custom query methods can be defined here if needed
    //Optional<Mentor> findByUsername(User);
    Optional<Mentor> findByEmail(String email);
//    List<Mentor> findBySkillsContaining(String skill);
}
