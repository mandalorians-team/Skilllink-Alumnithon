package com.example.skilllinkbackend.auth.controller;


import com.example.skilllinkbackend.auth.dto.AuthRequest;
import com.example.skilllinkbackend.auth.dto.AuthResponse;
import com.example.skilllinkbackend.auth.dto.RegisterRequest;
import com.example.skilllinkbackend.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;


    /**
     * Endpoint to handle user login.
     * This endpoint authenticates the user and returns an authentication response containing the token and refresh token.
     *
     * @param request The login request containing username and password.
     * @return ResponseEntity containing the authentication response with token and refresh token.
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        AuthResponse authResponse = authService.login(request);
        return ResponseEntity.ok(authResponse); // Return token + refresh token
    }


    /**
     * Endpoint to handle user registration.
     * This endpoint creates a new user and returns an authentication response containing the token and user ID.
     *
     * @param request The registration request containing user details.
     * @return ResponseEntity containing the authentication response with token and user ID.
     */
    // In AuthController.java
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        System.err.println("Received registration request for user: {} with role: {}" +
                request.getUsername() + " " +  request.getRole());
        AuthResponse response = authService.register(request);
        System.err.println("Successfully registered user: {} with role: {}" +
                request.getUsername() + " " + request.getRole());
        return ResponseEntity.ok(response);
    }



    /**
     * Endpoint to handle user logout.
     * This is a placeholder as logout logic may vary based on the authentication mechanism.
     *
     * @return Response indicating successful logout.
     */
    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        return ResponseEntity.ok().build();
    }


}