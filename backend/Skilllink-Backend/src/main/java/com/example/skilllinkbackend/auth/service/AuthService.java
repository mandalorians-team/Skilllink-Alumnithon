package com.example.skilllinkbackend.auth.service;

import com.example.skilllinkbackend.auth.dto.AuthRequest;
import com.example.skilllinkbackend.auth.dto.AuthResponse;
import com.example.skilllinkbackend.auth.dto.RegisterRequest;
import com.example.skilllinkbackend.auth.utils.JwtUtils;
import com.example.skilllinkbackend.learner.dto.LearnerRequest;
import com.example.skilllinkbackend.learner.service.LearnerService;
import com.example.skilllinkbackend.mentor.dto.MentorRequest;
import com.example.skilllinkbackend.mentor.service.MentorService;
import com.example.skilllinkbackend.security.UserPrincipal;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.model.Role;
import com.example.skilllinkbackend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final MentorService mentorService;
    private final LearnerService learnerService;

    public AuthResponse login(AuthRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtils.generateToken(new UserPrincipal(user));
        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));
        return new AuthResponse(user.getId(), token, refreshToken);
    }

    public AuthResponse register(RegisterRequest request) {
        validateRegisterRequest(request);

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        Role role = request.getRole();
        user.setRole(role);
        userRepository.save(user);

        log.info("Registering user with role: {}", role);

        if (role == Role.MENTOR) {
            MentorRequest mentorRequest = mapToMentorRequest(request, user.getId());
            mentorService.createMentorProfile(mentorRequest);
            log.info("Mentor profile created successfully");
        } else if (role == Role.LEARNER) {
            LearnerRequest learnerRequest = mapToLearnerRequest(request, user.getId());
            learnerService.createLearnerProfile(learnerRequest);
            log.info("Learner profile created successfully");
        }

        String token = jwtUtils.generateToken(new UserPrincipal(user));
        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));
        return new AuthResponse(user.getId(), token, refreshToken);
    }

    private void validateRegisterRequest(RegisterRequest request) {
        if (request.getUsername() == null || request.getUsername().isBlank()) {
            throw new IllegalArgumentException("Username cannot be null or blank");
        }
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email cannot be null or blank");
        }
        if (request.getPassword() == null || request.getPassword().isBlank()) {
            throw new IllegalArgumentException("Password cannot be null or blank");
        }
    }

    private MentorRequest mapToMentorRequest(RegisterRequest request, Long userId) {
        MentorRequest mentorRequest = new MentorRequest();
        mentorRequest.setUserId(userId);
        mentorRequest.setFirstName(request.getFirstName());
        mentorRequest.setLastName(request.getLastName());
        mentorRequest.setEmail(request.getEmail());
        mentorRequest.setPhotoUrl(request.getPhotoUrl());
        mentorRequest.setBio(request.getBio());
        mentorRequest.setExperience(request.getExperience());
        mentorRequest.setEducation(request.getEducation());
        mentorRequest.setLinkedinProfile(request.getLinkedinProfile());
        return mentorRequest;
    }

    private LearnerRequest mapToLearnerRequest(RegisterRequest request, Long userId) {
        LearnerRequest learnerRequest = new LearnerRequest();
        learnerRequest.setUserId(userId);
        learnerRequest.setFirstName(request.getFirstName());
        learnerRequest.setLastName(request.getLastName());
        learnerRequest.setEmail(request.getEmail());
        learnerRequest.setPhotoUrl(request.getPhotoUrl());
        learnerRequest.setBio(request.getBio());
        learnerRequest.setExperience(request.getExperience());
        learnerRequest.setEducation(request.getEducation());
        learnerRequest.setLinkedinProfile(request.getLinkedinProfile());
        return learnerRequest;
    }
}