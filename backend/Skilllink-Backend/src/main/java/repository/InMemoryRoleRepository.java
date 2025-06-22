package repository;

import model.Role;

import java.util.*;

public class InMemoryRoleRepository implements RoleRepository {
    private final Map<String, Role> roles = new HashMap<>();

    @Override
    public Role findByName(String name) {
        return roles.get(name.toUpperCase());
    }

    @Override
    public Role save(Role role) {
        roles.put(role.getName().toUpperCase(), role);
        return role;
    }
}
