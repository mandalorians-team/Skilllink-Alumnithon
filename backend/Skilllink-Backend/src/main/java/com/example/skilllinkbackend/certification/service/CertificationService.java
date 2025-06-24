package com.example.skilllinkbackend.certification.service;

import com.example.skilllinkbackend.certification.dto.CertificationDto;
import java.util.List;

public interface CertificationService {

    List<CertificationDto> getAll();

    CertificationDto getById(Long id);

    CertificationDto create(CertificationDto dto);

    CertificationDto update(Long id, CertificationDto dto);
}
