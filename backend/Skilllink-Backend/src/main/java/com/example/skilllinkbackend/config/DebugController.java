package com.example.skilllinkbackend.config;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class DebugController {

    @GetMapping("/env")
    public Map<String, String> showEnv() {
        return System.getenv();
    }
}