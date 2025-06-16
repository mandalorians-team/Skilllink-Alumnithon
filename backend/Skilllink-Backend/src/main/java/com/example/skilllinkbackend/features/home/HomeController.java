package com.example.skilllinkbackend.features.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "SkillL-link Backend is running perfectly";
    }
}
