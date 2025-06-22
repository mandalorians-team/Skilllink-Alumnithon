// RoleRepository.java
package repository;

import model.Role;

public interface RoleRepository {
    Role findByName(String name);
    Role save(Role role);
}
