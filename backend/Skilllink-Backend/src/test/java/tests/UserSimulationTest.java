package tests;

import model.*;
import service.UserService;
import repository.UserRepository;
import repository.RoleRepository;
import repository.InMemoryUserRepository;
import repository.InMemoryRoleRepository;

public class UserSimulationTest {

    public static void main(String[] args) {
        // Simulación de repositorios en memoria
        UserRepository userRepository = new InMemoryUserRepository();
        RoleRepository roleRepository = new InMemoryRoleRepository();

        // ¡Usar los mismos repositorios que acabas de crear!
        UserService userService = new UserService(userRepository, roleRepository);

        // Crear y guardar rol
        Role role = new Role();
        role.setName("MENTOR");
        role.setDescription("Acceso a guías y espacios de revisión");
        roleRepository.save(role);

        // Crear usuario
        User user = new User();
        user.setFirstName("Ignacio");
        user.setLastName("Pérez");
        user.setEmail("ignacio@example.com");
        user.setPassword("1234");
        user.setEnabled(true);

        // Crear y asignar perfil
        Profile profile = new Profile();
        profile.setLocation("Bogotá");
        profile.setOccupation("Mentor Backend");
        userService.assignProfile(user, profile);

        // Asignar rol y guardar
        userService.addRole(user, role);
        userRepository.save(user);

        // Mostrar por consola
        userService.printUserSummary(user);
    }
}
