package com.example.skilllinkbackend.user.controller;

import com.example.skilllinkbackend.auth.utils.JwtUtils;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.repository.UserRepository;
import io.swagger.v3.oas.annotations.Hidden;
import org.apache.tomcat.Jar;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;
    private final JwtUtils jwtUtils;


    public UserController(UserRepository userRepository, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.jwtUtils = jwtUtils;
    }


    /**
     * Constructor for UserController.
     *
     * @param userRepository the repository to manage User entities
     * @param jwtUtils       utility class for JWT operations
     */
    @GetMapping("/api/info")
    @io.swagger.v3.oas.annotations.Operation(
            summary = "Get user info",
            description = "Retrieve user information based on the provided JWT token"
    )
    public String getUserInfo(@RequestHeader("Authorization") String authHeader) {
        // Extract username from the JWT token
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7); // Remove "Bearer " prefix
            String username = jwtUtils.extractUsername(token);
            String role = jwtUtils.extractRole(token);
            String email = jwtUtils.extractEmail(token);

            return "User info for: " + username + ", Role: " + role + ", Email: " + email;
        } else {
            throw new IllegalArgumentException("Invalid Authorization header format");
        }
    }

    /**
     * UserController handles HTTP requests related to User entities.
     * It provides endpoints to add a new user and retrieve all users.
     */
    @Hidden
    @PostMapping
    @io.swagger.v3.oas.annotations.Operation(
            summary = "Add a new user",
            description = "Create a new user in the database"
    )
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    /**
     * Retrieves all users from the database.
     *
     * @return a list of all users
     */
    @GetMapping
    @io.swagger.v3.oas.annotations.Operation(
            summary = "List all users",
            description = "Retrieve all users present in the database"
    )
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}



//TODO continue with:
// 1. Set up validation and global error handling (e.g., input validations for your models).
// 2. Configure Spring Security & JWT for authentication and authorization.
// 3. Further enhance the Swagger documentation with reusable schemas.
