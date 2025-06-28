package com.example.skilllinkbackend.certification.dto;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

public class CertificationDto {

    @NotBlank(message = "El nombre de la certificación no puede estar vacío")
    private String nombre;

    @NotBlank(message = "La institución es requerida")
    private String institucion;

    @NotNull(message = "La fecha de emisión es obligatoria")
    @PastOrPresent(message = "La fecha de emisión no puede ser futura")
    private LocalDate fechaEmision;

    @NotNull(message = "La fecha de expiración es obligatoria")
    @FutureOrPresent(message = "La fecha de expiración debe ser presente o futura")
    private LocalDate fechaExpiracion;

    public CertificationDto() {
        // Constructor vacío requerido por frameworks como Jackson o MapStruct
    }

    public CertificationDto(String nombre, String institucion, LocalDate fechaEmision, LocalDate fechaExpiracion) {
        this.nombre = nombre;
        this.institucion = institucion;
        this.fechaEmision = fechaEmision;
        this.fechaExpiracion = fechaExpiracion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getInstitucion() {
        return institucion;
    }

    public void setInstitucion(String institucion) {
        this.institucion = institucion;
    }

    public LocalDate getFechaEmision() {
        return fechaEmision;
    }

    public void setFechaEmision(LocalDate fechaEmision) {
        this.fechaEmision = fechaEmision;
    }

    public LocalDate getFechaExpiracion() {
        return fechaExpiracion;
    }

    public void setFechaExpiracion(LocalDate fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }
}
