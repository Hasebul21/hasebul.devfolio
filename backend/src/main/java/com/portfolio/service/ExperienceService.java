package com.portfolio.service;

import com.portfolio.dto.ExperienceDto;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.model.Experience;
import com.portfolio.repository.ExperienceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public List<ExperienceDto> getAll() {
        return experienceRepository.findAllByOrderByDisplayOrderAsc()
            .stream().map(this::toDto).toList();
    }

    public ExperienceDto getById(Long id) {
        Experience exp = experienceRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Experience", id));
        return toDto(exp);
    }

    private ExperienceDto toDto(Experience e) {
        return ExperienceDto.builder()
            .id(e.getId())
            .company(e.getCompany())
            .role(e.getRole())
            .startDate(e.getStartDate())
            .endDate(e.getEndDate())
            .current(e.isCurrent())
            .location(e.getLocation())
            .description(e.getDescription())
            .highlights(e.getHighlights())
            .techStack(e.getTechStack())
            .companyUrl(e.getCompanyUrl())
            .logoUrl(e.getLogoUrl())
            .type(e.getType())
            .build();
    }
}
