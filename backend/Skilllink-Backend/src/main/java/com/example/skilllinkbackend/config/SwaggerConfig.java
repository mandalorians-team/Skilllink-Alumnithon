package com.example.skilllinkbackend.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;  // Changed import
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;




@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "SkillLink API",
                version = "1.0",
                description = "REST API for SkillLink mentoring platform",
                contact = @Contact(
                        name = "SkillLink Team",
                        email = "contact@skilllink.com"
                )
        )
)
public class SwaggerConfig {


    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components()
                        .addSecuritySchemes("bearerAuth",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                        )
                )
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"));
    }
}
