package com.example.skilllinkbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;

@SpringBootApplication
public class SkilllinkBackendApplication implements CommandLineRunner {

    @Autowired
    private DataSource dataSource;

    public static void main(String[] args) {
        SpringApplication.run(SkilllinkBackendApplication.class, args);
    }

    @Override
    public void run(String... args) {
        System.out.println("🌟 SkillLink Backend está iniciando...");

        // Verificar conexión a la base de datos
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

        // Escanear puertos abiertos según el sistema operativo
        try {
            String os = System.getProperty("os.name").toLowerCase();
            String command;

            if (os.contains("win")) {
                command = "cmd /c netstat -ano | findstr LISTENING";
            } else if (os.contains("mac") || os.contains("nix") || os.contains("nux")) {
                command = "sh -c lsof -nP -iTCP -sTCP:LISTEN";
            } else {
                System.out.println("⚠️ Plataforma no reconocida. Saltando escaneo de puertos.");
                return;
            }

            System.out.println("📡 Puertos en uso (modo escucha):");
            Process process = Runtime.getRuntime().exec(command);
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println("🧩 " + line);
                }
            }

        } catch (Exception e) {
            System.err.println("⚠️ Error al obtener los puertos en uso.");
            e.printStackTrace();
        }
    }
}
