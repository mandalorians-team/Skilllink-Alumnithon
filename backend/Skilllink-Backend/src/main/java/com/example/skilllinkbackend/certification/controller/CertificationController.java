package com.example.skilllinkbackend.certification.controller;

import com.example.skilllinkbackend.certification.dto.CertificationDto;
import com.example.skilllinkbackend.certification.service.CertificationService;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/certifications")
public class CertificationController {

    private final CertificationService certificationService;

    public CertificationController(CertificationService certificationService) {
        this.certificationService = certificationService;
    }

    @GetMapping
    public ResponseEntity<List<CertificationDto>> getAll() {
        List<CertificationDto> result = certificationService.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CertificationDto> getById(@PathVariable Long id) {
        CertificationDto dto = certificationService.getById(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<CertificationDto> create(@Valid @RequestBody CertificationDto dto) {
        CertificationDto created = certificationService.create(dto);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CertificationDto> update(@PathVariable Long id, @Valid @RequestBody CertificationDto dto) {
        CertificationDto updated = certificationService.update(id, dto);
        return ResponseEntity.ok(updated);
    }
}
