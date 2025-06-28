package com.example.skilllinkbackend.project.validations.edition;

import com.example.skilllinkbackend.category.model.Category;
import com.example.skilllinkbackend.category.repository.ICategoryRepository;
import com.example.skilllinkbackend.project.dto.ProjectUpdateDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EditionActiveCategoriesValidator implements ProjectEditionValidation {
    private final ICategoryRepository categoryRepository;

    public EditionActiveCategoriesValidator(ICategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void validate(ProjectUpdateDTO projectUpdateDTO) {
        List<Category> existingCategories = categoryRepository.findExistingIds(projectUpdateDTO.categoriesId());
        boolean allExist = existingCategories.size() == projectUpdateDTO.categoriesId().size();
        if (!allExist) {
            throw new RuntimeException("Al menos una categoría no existe");
            /*throw new NotFoundException("Al menos una categoría no existe");*/
        }
    }
}
