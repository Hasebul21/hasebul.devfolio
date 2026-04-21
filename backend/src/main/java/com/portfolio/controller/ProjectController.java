package com.portfolio.controller;

import com.portfolio.dto.ApiResponse;
import com.portfolio.dto.ProjectDto;
import com.portfolio.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    /** GET /api/projects?tech=Angular&category=Backend */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ProjectDto>>> getAll(
            @RequestParam(required = false) String tech,
            @RequestParam(required = false) String category) {
        return ResponseEntity.ok(ApiResponse.ok(projectService.getAllProjects(tech, category)));
    }

    /** GET /api/projects/featured */
    @GetMapping("/featured")
    public ResponseEntity<ApiResponse<List<ProjectDto>>> getFeatured() {
        return ResponseEntity.ok(ApiResponse.ok(projectService.getFeatured()));
    }

    /** GET /api/projects/tech-tags */
    @GetMapping("/tech-tags")
    public ResponseEntity<ApiResponse<List<String>>> getTechTags() {
        return ResponseEntity.ok(ApiResponse.ok(projectService.getTechTags()));
    }

    /** GET /api/projects/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProjectDto>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(projectService.getById(id)));
    }
}
