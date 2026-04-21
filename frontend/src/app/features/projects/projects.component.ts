import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardSkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeaderComponent, CardSkeletonComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  private readonly projectsService = inject(ProjectsService);

  allProjects = signal<Project[]>([]);
  loading = true;
  activeFilter = signal<string>('All');

  allTags = computed(() => {
    const tags = new Set<string>();
    this.allProjects().forEach(p => p.techStack.forEach(t => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  });

  filtered = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return this.allProjects();
    return this.allProjects().filter(p => p.techStack.includes(f));
  });

  ngOnInit(): void {
    this.projectsService.getStaticProjects().subscribe({
      next: projects => {
        this.allProjects.set(projects);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  setFilter(tag: string): void {
    this.activeFilter.set(tag);
  }
}
