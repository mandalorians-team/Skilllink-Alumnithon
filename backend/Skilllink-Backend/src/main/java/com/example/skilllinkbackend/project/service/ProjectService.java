package com.example.skilllinkbackend.project.service;

import com.example.skilllinkbackend.category.model.Category;
import com.example.skilllinkbackend.category.repository.ICategoryRepository;
import com.example.skilllinkbackend.learner.entity.Learner;
import com.example.skilllinkbackend.learner.repository.LearnerRepository;
import com.example.skilllinkbackend.mentor.entity.Mentor;
import com.example.skilllinkbackend.mentor.repository.MentorRepository;
import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import com.example.skilllinkbackend.project.dto.ProjectResponseDTO;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import com.example.skilllinkbackend.project.model.Project;
import com.example.skilllinkbackend.project.repository.IProjectRepository;
import com.example.skilllinkbackend.project.validations.creation.ProjectCreationValidation;
import com.example.skilllinkbackend.project.validations.edition.ProjectEditionValidation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService implements IProjectService {

    private final IProjectRepository projectRepository;
    private final List<ProjectCreationValidation> creationValidators;
    private final MentorRepository mentorRepository;
    private final LearnerRepository learnerRepository;
    private final ICategoryRepository categoryRepository;
    private final List<ProjectEditionValidation> editionValidators;

    public ProjectService(
            IProjectRepository projectRepository,
            List<ProjectCreationValidation> creationValidators,
            MentorRepository mentorRepository,
            LearnerRepository learnerRepository,
            ICategoryRepository categoryRepository,
            List<ProjectEditionValidation> editionValidators) {
        this.projectRepository = projectRepository;
        this.creationValidators = creationValidators;
        this.mentorRepository = mentorRepository;
        this.learnerRepository = learnerRepository;
        this.categoryRepository = categoryRepository;
        this.editionValidators = editionValidators;
    }

    @Override
    public ProjectResponseDTO createProject(ProjectRegisterDTO projectRegisterDTO) {
        creationValidators.forEach(v -> v.validate(projectRegisterDTO));
        Mentor creator = mentorRepository.findById(projectRegisterDTO.creatorId()).get();
        List<Learner> members = learnerRepository.findExistingEmails(projectRegisterDTO.members());
        List<Category> categories = categoryRepository.findExistingIds(projectRegisterDTO.categoriesId());

        Project project = new Project(projectRegisterDTO, creator, members, categories);
        Project projectResponse = projectRepository.save(project);

        return new ProjectResponseDTO(projectResponse);
    }

    @Override
    public Page<ProjectResponseDTO> getProjects(Pageable pagination) {
        return projectRepository.findAll(pagination).map(ProjectResponseDTO::new);
    }

    @Override
    public ProjectResponseDTO findById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proyecto no encontrado"));
                /*.orElseThrow(() -> new NotFoundException("Proyecto no encontrado"));*/
        return new ProjectResponseDTO(project);
    }

    @Override
    public ProjectResponseDTO updateProject(Long id, ProjectUpdateDTO projectUpdateDTO) {
        editionValidators.forEach(v -> v.validate(projectUpdateDTO));
        Project project = projectRepository.findById(id).get();
        Mentor creator = mentorRepository.findById(projectUpdateDTO.creatorId()).get();
        List<Learner> members = learnerRepository.findExistingEmails(projectUpdateDTO.members());
        List<Category> categories = categoryRepository.findExistingIds(projectUpdateDTO.categoriesId());

        project.update(projectUpdateDTO, creator, members, categories);
        return new ProjectResponseDTO(project);
    }

    @Override
    public void deleteProject(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proyecto no encontrado"));
                /*.orElseThrow(() -> new NotFoundException("Proyecto no encontrado"));*/
        project.deactive();
    }
}
