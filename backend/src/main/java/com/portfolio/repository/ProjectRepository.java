package com.portfolio.repository;

import com.portfolio.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByFeaturedTrueOrderByCreatedAtDesc();

    List<Project> findByCategoryIgnoreCaseOrderByCreatedAtDesc(String category);

    @Query("SELECT DISTINCT t FROM Project p JOIN p.techStack t ORDER BY t")
    List<String> findAllDistinctTechTags();

    @Query("SELECT p FROM Project p JOIN p.techStack t WHERE t = :tech ORDER BY p.createdAt DESC")
    List<Project> findByTechStackContaining(@Param("tech") String tech);

    List<Project> findAllByOrderByFeaturedDescCreatedAtDesc();
}
