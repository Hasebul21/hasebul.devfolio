package com.portfolio.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class ProjectDto {
    private Long id;
    private String title;
    private String description;
    private String longDescription;
    private List<String> techStack;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl;
    private boolean featured;
    private String category;
    private LocalDateTime createdAt;
}
