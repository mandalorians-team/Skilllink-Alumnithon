package com.example.skilllinkbackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;

@Component
public class DatabaseChecker implements CommandLineRunner {

    private final DataSource dataSource;
    private final Environment environment;

    public DatabaseChecker(DataSource dataSource, Environment environment) {
        this.dataSource = dataSource;
        this.environment = environment;
    }

    @Override
    public void run(String... args) {
        System.out.println("🛠️ Perfil(es) activo(s):");
        for (String profile : environment.getActiveProfiles()) {
            System.out.println("🔧 " + profile);
        }

        try (Connection connection = dataSource.getConnection()) {
            System.out.println("✅ Conexión establecida con éxito:");
            System.out.println("🔗 URL: " + connection.getMetaData().getURL());
            System.out.println("👤 Usuario: " + connection.getMetaData().getUserName());
        } catch (Exception e) {
            System.err.println("❌ Error al conectar con la base de datos:");
            e.printStackTrace();
        }
    }
}
