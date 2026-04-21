package com.portfolio.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ExperienceDto {
    private Long id;
    private String company;
    private String role;
    private String startDate;
    private String endDate;
    private boolean current;
    private String location;
    private String description;
    private List<String> highlights;
    private List<String> techStack;
    private String companyUrl;
    private String logoUrl;
    private String type;
}
