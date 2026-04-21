package com.portfolio.controller;

import com.portfolio.dto.ApiResponse;
import com.portfolio.dto.ExperienceDto;
import com.portfolio.service.ExperienceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experience")
@RequiredArgsConstructor
public class ExperienceController {

    private final ExperienceService experienceService;

    /** GET /api/experience */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ExperienceDto>>> getAll() {
        return ResponseEntity.ok(ApiResponse.ok(experienceService.getAll()));
    }

    /** GET /api/experience/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ExperienceDto>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(experienceService.getById(id)));
    }
}
