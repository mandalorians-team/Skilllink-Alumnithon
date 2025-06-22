package com.example.skilllinkbackend.mentor.controller;

import com.example.skilllinkbackend.mentor.dto.MentorRequest;
import com.example.skilllinkbackend.mentor.dto.MentorResponse;
import com.example.skilllinkbackend.mentor.service.MentorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mentors")
public class MentorController {

    private final MentorService mentorService;

    public MentorController(MentorService mentorService) {
        this.mentorService = mentorService;
    }

    // Define endpoints for mentor operations here
    @GetMapping("/test")
    public String testEndpoint() {
        return "Mentor API is working!";
    }

    @GetMapping
    public ResponseEntity<List<MentorResponse>> getAllMentors() {
        return ResponseEntity.ok(mentorService.getAllMentors());
    }

//    @GetMapping("/skills")
//    public ResponseEntity<List<MentorResponse>> getMentorsBySkill(String skill) {
//        List<MentorResponse> mentors = mentorService.getMentorsBySkill(skill);
//        if (mentors.isEmpty()) {
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(mentors);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<MentorResponse> getMentorById(@PathVariable Long id) {
        MentorResponse mentor = mentorService.getMentorProfile(id);
        if (mentor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mentor);
    }

    @PostMapping("/create")
    public ResponseEntity<MentorResponse> createMentorProfile(@RequestBody MentorRequest mentorRequest) {
        System.out.println("MentorRequest: " + mentorRequest); // For debugging
        MentorResponse mentorResponse = mentorService.createMentorProfile(mentorRequest);
        return ResponseEntity.status(201).body(mentorResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MentorResponse> updateMentorProfile(@PathVariable Long id, @RequestBody MentorRequest mentorRequest) {
        MentorResponse updatedMentor = mentorService.updateMentorProfile(id, mentorRequest);
        if (updatedMentor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedMentor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMentorProfile(@PathVariable Long id) {
        mentorService.deleteMentorProfile(id);
        return ResponseEntity.noContent().build();
    }

    //TODO create endpoint for updating mentor profile
    //TODO create endpoint for deleting mentor profile
    //TODO create endpoint for getting mentor profile by username
    //TODO create skill entity and repository, and add methods to MentorService for managing skills
    //TODO create course entity and repository, and add methods to MentorService for managing courses




}
