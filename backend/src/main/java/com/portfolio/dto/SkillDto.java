package com.portfolio.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SkillDto {
    private Long id;
    private String name;
    private String category;
    private int proficiency;
    private String iconUrl;
    private Integer yearsOfExperience;
}
