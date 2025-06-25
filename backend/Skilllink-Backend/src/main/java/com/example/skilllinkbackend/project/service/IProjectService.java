package com.example.skilllinkbackend.project.service;

import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import com.example.skilllinkbackend.project.dto.ProjectResponseDTO;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProjectService {
    ProjectResponseDTO createProject(ProjectRegisterDTO projectRegisterDTO);

    Page<ProjectResponseDTO> getProjects(Pageable pagination);

    ProjectResponseDTO findById(Long id);

    ProjectResponseDTO updateProject(Long id, ProjectUpdateDTO projectUpdateDTO);

    void deleteProject(Long id);
}
