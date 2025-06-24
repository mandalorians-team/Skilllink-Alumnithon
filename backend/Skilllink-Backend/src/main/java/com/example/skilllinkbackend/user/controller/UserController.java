package com.example.skilllinkbackend.user.controller;

import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * UserController handles HTTP requests related to User entities.
     * It provides endpoints to add a new user and retrieve all users.
     */
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
