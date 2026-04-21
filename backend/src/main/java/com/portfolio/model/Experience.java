package com.portfolio.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "experience")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String company;

    @Column(nullable = false, length = 200)
    private String role;

    @Column(name = "start_date", nullable = false, length = 20)
    private String startDate;

    @Column(name = "end_date", length = 20)
    private String endDate;

    @Column(nullable = false)
    private boolean current;

    @Column(nullable = false, length = 200)
    private String location;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @ElementCollection
    @CollectionTable(name = "experience_highlights", joinColumns = @JoinColumn(name = "experience_id"))
    @Column(name = "highlight", columnDefinition = "TEXT")
    private List<String> highlights;

    @ElementCollection
    @CollectionTable(name = "experience_tech_stack", joinColumns = @JoinColumn(name = "experience_id"))
    @Column(name = "tech")
    private List<String> techStack;

    @Column(name = "company_url")
    private String companyUrl;

    @Column(name = "logo_url")
    private String logoUrl;

    @Column(nullable = false, length = 50)
    private String type;

    @Column(name = "display_order")
    private int displayOrder;
}
