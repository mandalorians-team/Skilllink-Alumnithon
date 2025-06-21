package repository;

import model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    // Aquí puedes agregar métodos personalizados si lo necesitas más adelante
}
