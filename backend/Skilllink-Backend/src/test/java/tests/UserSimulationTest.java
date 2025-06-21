package tests;

import model.User;
import model.Profile;
import model.Role;

public class UserSimulationTest {

    public static void main(String[] args) {
        // Crear usuario
        User user = new User();
        user.setFirstName("Ignacio");
        user.setLastName("Pérez");
        user.setEmail("ignacio@example.com");
        user.setPassword("secret123");
        user.setEnabled(true);

        // Crear perfil
        Profile profile = new Profile();
        profile.setLocation("Bogotá");
        profile.setOccupation("Desarrollador Backend");
        profile.setLinkedin("https://linkedin.com/in/ignacio");
        profile.setUser(user); // Enlazar perfil al usuario
        user.setProfile(profile);

        // Crear rol
        Role role = new Role();
        role.setName("ADMINISTRADOR");
        role.setDescription("Acceso completo a la plataforma");

        user.getRoles().add(role);
        role.getUsers().add(user); // Relación bidireccional opcional

        // Visualizar
        System.out.println("Usuario: " + user.getFirstName() + " " + user.getLastName());
        System.out.println("Rol asignado: " + user.getRoles().iterator().next().getName());
        System.out.println("Ubicación: " + user.getProfile().getLocation());
    }
}
