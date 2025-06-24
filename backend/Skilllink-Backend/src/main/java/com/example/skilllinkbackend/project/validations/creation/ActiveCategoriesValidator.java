package com.example.skilllinkbackend.project.validations.creation;

import com.example.skilllinkbackend.category.model.Category;
import com.example.skilllinkbackend.category.repository.ICategoryRepository;
import com.example.skilllinkbackend.project.dto.ProjectRegisterDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ActiveCategoriesValidator implements ProjectCreationValidation {

    private final ICategoryRepository categoryRepository;

    public ActiveCategoriesValidator(ICategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void validate(ProjectRegisterDTO projectRegisterDTO) {
        List<Category> existingCategories = categoryRepository.findExistingIds(projectRegisterDTO.categoriesId());
        boolean allExist = existingCategories.size() == projectRegisterDTO.categoriesId().size();
        if (!allExist) {
            throw new RuntimeException("Al menos una categoría no existe");
            /*throw new NotFoundException("Al menos una categoría no existe");*/
        }
    }
}
