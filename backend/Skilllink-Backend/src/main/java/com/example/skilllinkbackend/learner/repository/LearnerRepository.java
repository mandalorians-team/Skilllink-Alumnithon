package com.example.skilllinkbackend.learner.repository;

import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LearnerRepository extends JpaRepository<Learner, Long> {

    Optional<Learner> findByEmail(String email);
    @Query("SELECT m FROM Learner m JOIN m.user u WHERE u.role = 'LEARNER'")
    List<Learner> findAllLearners();

    @Query("""
            SELECT l
            FROM Learner l
            JOIN l.user u
            WHERE u.role = 'LEARNER' AND l.email IN :emails
            """)
    List<Learner> findExistingEmails(List<String> emails);

    @Query("""
            SELECT l
            FROM Learner l
            JOIN l.user u
            WHERE u.role = 'LEARNER' AND l.id IN :ids
            """)
    List<Learner> findExistingIds(List<Long> ids);
}
