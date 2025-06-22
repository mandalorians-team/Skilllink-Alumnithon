package repository;

import model.User;

import java.util.*;

public class InMemoryUserRepository implements UserRepository {
    private final Map<Long, User> storage = new HashMap<>();
    private long nextId = 1L;

    @Override
    public long count() {
        return storage.size();
    }

    @Override
    public User save(User user) {
        if (user.getId() == null) {
            user.setId(nextId++);
        }
        storage.put(user.getId(), user);
        return user;
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.ofNullable(storage.get(id));
    }

    @Override
    public boolean existsByEmail(String email) {
        return storage.values().stream().anyMatch(u -> u.getEmail().equalsIgnoreCase(email));
    }
}
