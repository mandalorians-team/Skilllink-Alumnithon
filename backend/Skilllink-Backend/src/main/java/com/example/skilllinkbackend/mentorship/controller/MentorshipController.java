package com.example.skilllinkbackend.mentorship.controller;

import com.example.skilllinkbackend.mentorship.dto.MentorshipRequest;
import com.example.skilllinkbackend.mentorship.entity.Mentorship;
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
    public Mentorship create(@RequestBody MentorshipRequest request) {
        return mentorshipService.createMentorship(request);
    }

    @GetMapping
    public List<Mentorship> getAll() {
        return mentorshipService.getAllMentorships();
    }
}