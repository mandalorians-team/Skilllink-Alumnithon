package com.example.skilllinkbackend.certification.service.impl;

import com.example.skilllinkbackend.certification.dto.CertificationDto;
import com.example.skilllinkbackend.certification.entity.Certification;
import com.example.skilllinkbackend.certification.mapper.CertificationMapper;
import com.example.skilllinkbackend.certification.repository.CertificationRepository;
import com.example.skilllinkbackend.certification.service.CertificationService;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CertificationServiceImpl implements CertificationService {

    private final CertificationRepository certificationRepository;

    public CertificationServiceImpl(CertificationRepository certificationRepository) {
        this.certificationRepository = certificationRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<CertificationDto> getAll() {
        return certificationRepository.findAll()
                .stream()
                .map(CertificationMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public CertificationDto getById(Long id) {
        Certification certification = certificationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Certificación no encontrada con ID: " + id));
        return CertificationMapper.toDto(certification);
    }

    @Override
    @Transactional
    public CertificationDto create(CertificationDto dto) {
        Certification certification = CertificationMapper.toEntity(dto);
        Certification saved = certificationRepository.save(certification);
        return CertificationMapper.toDto(saved);
    }

    @Override
    @Transactional
    public CertificationDto update(Long id, CertificationDto dto) {
        Certification certification = certificationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se puede actualizar. Certificación no encontrada con ID: " + id));

        certification.setNombre(dto.getNombre());
        certification.setInstitucion(dto.getInstitucion());
        certification.setFechaEmision(dto.getFechaEmision());
        certification.setFechaExpiracion(dto.getFechaExpiracion());

        Certification updated = certificationRepository.save(certification);
        return CertificationMapper.toDto(updated);
    }
}
