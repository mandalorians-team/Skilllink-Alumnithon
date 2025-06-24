package com.example.skilllinkbackend.certification.mapper;

import com.example.skilllinkbackend.certification.dto.CertificationDto;
import com.example.skilllinkbackend.certification.entity.Certification;

public class CertificationMapper {

    public static CertificationDto toDto(Certification entity) {
        if (entity == null) {
            return null;
        }

        CertificationDto dto = new CertificationDto();
        dto.setNombre(entity.getNombre());
        dto.setInstitucion(entity.getInstitucion());
        dto.setFechaEmision(entity.getFechaEmision());
        dto.setFechaExpiracion(entity.getFechaExpiracion());
        return dto;
    }

    public static Certification toEntity(CertificationDto dto) {
        if (dto == null) {
            return null;
        }

        return new Certification(
                dto.getNombre(),
                dto.getInstitucion(),
                dto.getFechaEmision(),
                dto.getFechaExpiracion()
        );
    }
}
