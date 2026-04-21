package com.portfolio.service;

import com.portfolio.dto.ProjectDto;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.model.Project;
import com.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<ProjectDto> getAllProjects(String tech, String category) {
        List<Project> projects;

        if (tech != null && !tech.isBlank()) {
            projects = projectRepository.findByTechStackContaining(tech);
        } else if (category != null && !category.isBlank()) {
            projects = projectRepository.findByCategoryIgnoreCaseOrderByCreatedAtDesc(category);
        } else {
            projects = projectRepository.findAllByOrderByFeaturedDescCreatedAtDesc();
        }

        return projects.stream().map(this::toDto).toList();
    }

    public ProjectDto getById(Long id) {
        Project project = projectRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Project", id));
        return toDto(project);
    }

    public List<ProjectDto> getFeatured() {
        return projectRepository.findByFeaturedTrueOrderByCreatedAtDesc()
            .stream().map(this::toDto).toList();
    }

    public List<String> getTechTags() {
        return projectRepository.findAllDistinctTechTags();
    }

    private ProjectDto toDto(Project p) {
        return ProjectDto.builder()
            .id(p.getId())
            .title(p.getTitle())
            .description(p.getDescription())
            .longDescription(p.getLongDescription())
            .techStack(p.getTechStack())
            .githubUrl(p.getGithubUrl())
            .liveUrl(p.getLiveUrl())
            .imageUrl(p.getImageUrl())
            .featured(p.isFeatured())
            .category(p.getCategory())
            .createdAt(p.getCreatedAt())
            .build();
    }
}
