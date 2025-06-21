package tests;

import model.*;
import service.UserService;

public class UserSimulationTest {

    public static void main(String[] args) {
        UserService userService = new UserService();

        User user = new User();
        user.setFirstName("Ignacio");
        user.setLastName("Pérez");
        user.setEmail("ignacio@example.com");
        user.setPassword("1234");
        user.setEnabled(true);

        Role role = new Role();
        role.setName("MENTOR");
        role.setDescription("Acceso a guías y espacios de revisión");

        Profile profile = new Profile();
        profile.setLocation("Bogotá");
        profile.setOccupation("Mentor Backend");

        userService.assignProfile(user, profile);
        userService.addRole(user, role);
        userService.printUserSummary(user);
    }
}
