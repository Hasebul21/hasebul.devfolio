package com.portfolio.controller;

import com.portfolio.dto.ApiResponse;
import com.portfolio.dto.SkillDto;
import com.portfolio.service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;

    /** GET /api/skills?category=frameworks */
    @GetMapping
    public ResponseEntity<ApiResponse<List<SkillDto>>> getAll(
            @RequestParam(required = false) String category) {
        return ResponseEntity.ok(ApiResponse.ok(skillService.getAll(category)));
    }
}
