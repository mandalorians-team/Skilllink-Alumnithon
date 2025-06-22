package com.example.skilllinkbackend.auth.service;

import com.example.skilllinkbackend.auth.dto.AuthRequest;
import com.example.skilllinkbackend.auth.dto.AuthResponse;
import com.example.skilllinkbackend.auth.dto.RegisterRequest;
import com.example.skilllinkbackend.auth.utils.JwtUtils;
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

    public AuthResponse login(AuthRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtils.generateToken(new UserPrincipal(user));
        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));
        return new AuthResponse(token, refreshToken);
    }

    public AuthResponse register(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
       // user.setRole(request.getRole() !=null ? request.getRole() : Role.LEARNER); // Default to LEARNER if no role is provided
        user.setRole(Role.LEARNER);
        userRepository.save(user);

        String token = jwtUtils.generateToken(new UserPrincipal(user));
        String refreshToken = jwtUtils.generateRefreshToken(new UserPrincipal(user));
        return new AuthResponse(token, refreshToken);
    }

}