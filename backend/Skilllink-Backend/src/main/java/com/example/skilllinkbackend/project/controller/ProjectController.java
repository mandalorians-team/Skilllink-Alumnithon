package com.example.skilllinkbackend.project.controller;

import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import com.example.skilllinkbackend.project.dto.ProjectResponseDTO;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import com.example.skilllinkbackend.project.service.IProjectService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final IProjectService projectService;

    public ProjectController(IProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping
    @Transactional
    public ResponseEntity<ProjectResponseDTO> createProject(
            @RequestBody @Valid ProjectRegisterDTO projectRegisterDTO,
            UriComponentsBuilder uriComponentsBuilder) {
        ProjectResponseDTO projectResponse = projectService.createProject(projectRegisterDTO);
        URI url = uriComponentsBuilder.path("/project/{id}").buildAndExpand(projectResponse.id()).toUri();
        return ResponseEntity.created(url).body(projectResponse);
    }

    @GetMapping
    public Map<String, Object> getProjects(@PageableDefault(size = 10, sort = "id") Pageable pagination) {
        Page<ProjectResponseDTO> projectPage = projectService.getProjects(pagination);
        Map<String, Object> response = new HashMap<>();
        response.put("content", projectPage.getContent());
        response.put("currentPage", projectPage.getNumber());
        response.put("totalItems", projectPage.getTotalElements());
        response.put("totalPages", projectPage.getTotalPages());
        response.put("pageSize", projectPage.getSize());
        response.put("hasNext", projectPage.hasNext());
        response.put("hasPrevious", projectPage.hasPrevious());
        return response;
    }

    @GetMapping("/{id}")
    public ProjectResponseDTO findById(@PathVariable Long id) {
        return projectService.findById(id);
    }

    @PutMapping("/{id}")
    @Transactional
    public ProjectResponseDTO updateProject(
            @PathVariable Long id,
            @RequestBody @Valid ProjectUpdateDTO projectUpdateDTO) {
        return projectService.updateProject(id, projectUpdateDTO);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}
