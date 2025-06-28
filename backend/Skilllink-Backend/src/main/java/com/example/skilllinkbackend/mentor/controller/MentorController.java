package com.example.skilllinkbackend.mentor.controller;

import com.example.skilllinkbackend.mentor.dto.MentorRequest;
import com.example.skilllinkbackend.mentor.dto.MentorResponse;
import com.example.skilllinkbackend.mentor.service.MentorService;
import io.swagger.v3.oas.annotations.Hidden;
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


    /**
     * Endpoint to get all mentors.
     *
     * @return List of all mentors.
     */
    @GetMapping
    public ResponseEntity<List<MentorResponse>> getAllMentors() {
        return ResponseEntity.ok(mentorService.getAllMentors());
    }


    /**
     * Endpoint to get a mentor by ID.
     *
     * @param id The ID of the mentor.
     * @return The mentor profile if found, otherwise 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<MentorResponse> getMentorById(@PathVariable Long id) {
        MentorResponse mentor = mentorService.getMentorProfile(id);
        if (mentor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mentor);
    }


    /**
     * Endpoint to create a new mentor profile.
     *
     * @param mentorRequest The request containing mentor details.
     * @return The created mentor profile.
     */
    @Hidden
    @PostMapping("/create")
    public ResponseEntity<MentorResponse> createMentorProfile(@RequestBody MentorRequest mentorRequest) {
        MentorResponse mentorResponse = mentorService.createMentorProfile(mentorRequest);
        return ResponseEntity.status(201).body(mentorResponse);
    }

    /**
     * Endpoint to update an existing mentor profile.
     *
     * @param id The ID of the mentor to update.
     * @param mentorRequest The request containing updated mentor details.
     * @return The updated mentor profile if successful, otherwise 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<MentorResponse> updateMentorProfile(@PathVariable Long id, @RequestBody MentorRequest mentorRequest) {
        MentorResponse updatedMentor = mentorService.updateMentorProfile(id, mentorRequest);
        if (updatedMentor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedMentor);
    }

    /**
     * Endpoint to delete a mentor profile.
     *
     * @param id The ID of the mentor to delete.
     * @return 204 No Content if successful, otherwise 404 Not Found.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMentorProfile(@PathVariable Long id) {
        mentorService.deleteMentorProfile(id);
        return ResponseEntity.noContent().build();
    }


    //TODO create endpoint for getting mentor profile by username
    //TODO create skill entity and repository, and add methods to MentorService for managing skills
    //TODO create course entity and repository, and add methods to MentorService for managing courses




}
