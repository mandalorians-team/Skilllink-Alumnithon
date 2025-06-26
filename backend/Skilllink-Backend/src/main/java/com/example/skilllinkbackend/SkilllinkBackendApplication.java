package com.example.skilllinkbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;
import java.sql.Connection;

@SpringBootApplication
public class SkilllinkBackendApplication implements CommandLineRunner {

    @Autowired
    private DataSource dataSource;

    public static void main(String[] args) {
        SpringApplication.run(SkilllinkBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("🌟 SkillLink Backend está iniciando...");
        try (Connection connection = dataSource.getConnection()) {
            String url = connection.getMetaData().getURL();
            String username = connection.getMetaData().getUserName();
            System.out.println("✅ Conectado exitosamente a la base de datos:");
            System.out.println("🔗 URL: " + url);
            System.out.println("👤 Usuario: " + username);
        } catch (Exception e) {
            System.err.println("❌ No se pudo establecer conexión con la base de datos.");
            e.printStackTrace();
        }
    }
}

