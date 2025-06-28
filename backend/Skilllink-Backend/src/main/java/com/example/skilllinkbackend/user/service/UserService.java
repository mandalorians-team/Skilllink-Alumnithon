package com.example.skilllinkbackend.user.service;


import com.example.skilllinkbackend.security.UserPrincipal;
import com.example.skilllinkbackend.user.entity.User;
import com.example.skilllinkbackend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;


    /**
     * UserService implements UserDetailsService to load user-specific data.
     * It provides methods to retrieve user details by username.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new UserPrincipal(user);
    }


}