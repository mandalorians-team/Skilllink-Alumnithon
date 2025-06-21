package service;

import model.User;
import model.Profile;
import model.Role;

public class UserService {

    public void assignProfile(User user, Profile profile) {
        user.setProfile(profile);
        profile.setUser(user);
    }

    public void addRole(User user, Role role) {
        user.getRoles().add(role);
        role.getUsers().add(user); // bidireccionalidad
    }

    public void disableUser(User user) {
        user.setEnabled(false);
    }

    public void printUserSummary(User user) {
        System.out.println("Nombre: " + user.getFirstName() + " " + user.getLastName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Roles asignados: " + user.getRoles().size());
        System.out.println("Ubicación (si aplica): " +
                (user.getProfile() != null ? user.getProfile().getLocation() : "Sin perfil"));
    }
}
