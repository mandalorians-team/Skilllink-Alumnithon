// UserRepository.java
package repository;

import model.User;
import java.util.Optional;

public interface UserRepository {
    long count();
    User save(User user);
    Optional<User> findById(Long id);
    boolean existsByEmail(String email);
}
