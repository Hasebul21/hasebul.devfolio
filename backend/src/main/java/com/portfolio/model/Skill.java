package com.portfolio.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skills")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String category;

    @Column(nullable = false)
    private int proficiency;

    @Column(name = "icon_url")
    private String iconUrl;

    @Column(name = "years_of_experience")
    private Integer yearsOfExperience;

    @Column(name = "display_order")
    private int displayOrder;
}
