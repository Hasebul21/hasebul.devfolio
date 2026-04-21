package com.portfolio.service;

import com.portfolio.dto.SkillDto;
import com.portfolio.model.Skill;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SkillService {

    private final SkillRepository skillRepository;

    public List<SkillDto> getAll(String category) {
        List<Skill> skills = (category != null && !category.isBlank())
            ? skillRepository.findByCategoryIgnoreCaseOrderByDisplayOrderAsc(category)
            : skillRepository.findAllByOrderByCategoryAscDisplayOrderAsc();

        return skills.stream().map(this::toDto).toList();
    }

    private SkillDto toDto(Skill s) {
        return SkillDto.builder()
            .id(s.getId())
            .name(s.getName())
            .category(s.getCategory())
            .proficiency(s.getProficiency())
            .iconUrl(s.getIconUrl())
            .yearsOfExperience(s.getYearsOfExperience())
            .build();
    }
}
