package model;

import jakarta.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String location;
    private String occupation;
    private String linkedin;
    private String github;
    private String portfolio;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // constructor, getters y setters...
}
