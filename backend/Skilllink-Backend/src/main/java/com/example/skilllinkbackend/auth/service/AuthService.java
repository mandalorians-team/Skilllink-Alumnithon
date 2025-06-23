package com.example.skilllinkbackend.auth.service;

import com.example.skilllinkbackend.auth.dto.AuthRequest;
import com.example.skilllinkbackend.auth.dto.AuthResponse;
import com.example.skilllinkbackend.auth.dto.RegisterRequest;
import com.example.skilllinkbackend.auth.utils.JwtUtils;
import com.example.skilllinkbackend.mentor.dto.MentorRequest;
import com.example.skilllinkbackend.mentor.service.MentorService;
import com.example.skilllinkbackend.security.UserPrincipal;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.model.Role;
import com.example.skilllinkbackend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final MentorService mentorService; // Assuming MentorService is needed for some operations


    /**
     * Handles user login by validating credentials and generating JWT tokens.
     *
     * @param request The authentication request containing username and password.
     * @return AuthResponse containing user ID, access token, and refresh token.
     */
    public AuthResponse login(AuthRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtils.generateToken(new UserPrincipal(user));
        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));
        return new AuthResponse(user.getId() ,token, refreshToken);
    }




    /**
     * Handles user registration by creating a new user and generating JWT tokens.
     *
     * @param request The registration request containing user details.
     * @return AuthResponse containing user ID, access token, and refresh token.
     */
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        // Create a new user with the provided details
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        Role role = request.getRole() != null ? request.getRole() : Role.LEARNER;
        user.setRole(role);
        userRepository.save(user);

        if (role == Role.MENTOR) {
            // If the user is a mentor, create an empty mentor profile
            MentorRequest mentorRequest = new MentorRequest();
            mentorRequest.setUserId(user.getId());
            mentorRequest.setFirstName(request.getFirstName());
            mentorRequest.setLastName(request.getLastName());
            mentorRequest.setEmail(request.getEmail());
            mentorRequest.setPhotoUrl(request.getPhotoUrl());
            mentorRequest.setBio(request.getBio());
            mentorRequest.setExperience(request.getExperience());
            mentorRequest.setEducation(request.getEducation());
            mentorRequest.setLinkedinProfile(request.getLinkedinProfile());
            mentorService.createMentorProfile(mentorRequest);
        }

        // Generate JWT tokens
        String token = jwtUtils.generateToken(new UserPrincipal(user));
        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));

        // Return AuthResponse containing token, refreshToken, and userId
        return new AuthResponse(user.getId(), token, refreshToken);

    }










    //    public AuthResponse register(RegisterRequest request) {
//        User user = new User();
//        user.setUsername(request.getUsername());
//        user.setPassword(passwordEncoder.encode(request.getPassword()));
//       // user.setRole(request.getRole() !=null ? request.getRole() : Role.LEARNER); // Default to LEARNER if no role is provided
//        user.setRole(Role.LEARNER);
//        userRepository.save(user);
//
//        String token = jwtUtils.generateToken(new UserPrincipal(user));
//        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));
//        return new AuthResponse(token, refreshToken);
//    }

}