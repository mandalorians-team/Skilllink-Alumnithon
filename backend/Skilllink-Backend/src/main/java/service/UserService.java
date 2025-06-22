package service;

import model.User;
import model.Role;
import model.Profile;
import repository.UserRepository;
import repository.RoleRepository;

import java.util.Collections;
import java.util.HashSet;

public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public User registerUser(User user) {
        if (isFirstUser()) {
            Role adminRole = roleRepository.findByName("ADMIN");
            if (adminRole != null) {
                user.setRoles(Collections.singleton(adminRole));
                adminRole.getUsers().add(user);
            }
        }
        return userRepository.save(user);
    }

    public boolean isFirstUser() {
        return userRepository.count() == 0;
    }

    public void assignRole(User user, String roleName) {
        Role role = roleRepository.findByName(roleName);
        if (role != null && !user.getRoles().contains(role)) {
            user.getRoles().add(role);
            role.getUsers().add(user);
        }
    }

    public void assignProfile(User user, Profile profile) {
        user.setProfile(profile);
        profile.setUser(user);
    }

    public void addRole(User user, Role role) {
        if (user.getRoles() == null) {
            user.setRoles(new HashSet<>());
        }
        if (!user.getRoles().contains(role)) {
            user.getRoles().add(role);
            role.getUsers().add(user);
        }
    }

    public void disableUser(User user) {
        user.setEnabled(false);
        userRepository.save(user);
    }

    public void printUserSummary(User user) {
        System.out.println("🧑 Nombre: " + user.getFirstName() + " " + user.getLastName());
        System.out.println("📧 Email: " + user.getEmail());
        System.out.println("🧩 Roles: " + user.getRoles().stream().map(Role::getName).toList());
        System.out.println("🌍 Perfil: " +
                (user.getProfile() != null ? user.getProfile().getOccupation() + ", " + user.getProfile().getLocation() : "Sin perfil"));
    }
}
