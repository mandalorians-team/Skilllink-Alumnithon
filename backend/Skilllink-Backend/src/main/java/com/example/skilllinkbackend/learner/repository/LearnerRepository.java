package com.example.skilllinkbackend.learner.repository;

import com.example.skilllinkbackend.learner.entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LearnerRepository extends JpaRepository<Learner, Long> {

    Optional<Learner> findByEmail(String email);

}
