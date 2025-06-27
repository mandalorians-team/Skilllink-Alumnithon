package com.example.skilllinkbackend.mentorship.controller;

import com.example.skilllinkbackend.mentorship.dto.MentorshipRegisterDTO;
import com.example.skilllinkbackend.mentorship.dto.MentorshipResponseDTO;
import com.example.skilllinkbackend.mentorship.service.MentorshipService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/mentorships")
public class MentorshipController {
    private final MentorshipService mentorshipService;

    public MentorshipController(MentorshipService mentorshipService) {
        this.mentorshipService = mentorshipService;
    }

    @PostMapping
    public MentorshipResponseDTO create(@RequestBody MentorshipRegisterDTO request) {
        return mentorshipService.createMentorship(request);
    }

    @GetMapping
    public List<MentorshipResponseDTO> getAll() {
        return mentorshipService.getAllMentorships();
    }

    @GetMapping("/{id}")
    public MentorshipResponseDTO findById(@PathVariable Long id) {
        return mentorshipService.findById(id);
    }
}