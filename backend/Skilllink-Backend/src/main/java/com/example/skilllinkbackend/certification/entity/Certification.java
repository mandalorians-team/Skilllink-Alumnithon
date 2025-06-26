package com.example.skilllinkbackend.certification.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
@Table(name = "certifications")
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre de la certificación es obligatorio")
    @Column(nullable = false)
    private String nombre;

    @NotBlank(message = "La institución emisora es obligatoria")
    @Column(nullable = false)
    private String institucion;

    @NotNull(message = "La fecha de emisión no puede ser nula")
    @PastOrPresent(message = "La fecha de emisión no puede ser futura")
    @Column(name = "fecha_emision", nullable = false)
    private LocalDate fechaEmision;

    @NotNull(message = "La fecha de expiración no puede ser nula")
    @FutureOrPresent(message = "La fecha de expiración debe ser presente o futura")
    @Column(name = "fecha_expiracion", nullable = false)
    private LocalDate fechaExpiracion;

    // 🧱 Constructor por defecto
    public Certification() {}

    // 🔧 Constructor completo
    public Certification(String nombre, String institucion, LocalDate fechaEmision, LocalDate fechaExpiracion) {
        this.nombre = nombre;
        this.institucion = institucion;
        this.fechaEmision = fechaEmision;
        this.fechaExpiracion = fechaExpiracion;
    }

    // ⚙️ Getters y Setters

    public Long getId() {
        return id;
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

    public void setId(Long id) {
        this.id = id;
    }
}
