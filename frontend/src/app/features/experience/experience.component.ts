import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../core/services/experience.service';
import { Experience } from '../../core/models/experience.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  private readonly experienceService = inject(ExperienceService);
  experiences: Experience[] = [];
  loading = true;

  ngOnInit(): void {
    this.experienceService.getStaticExperiences().subscribe({
      next: data => { this.experiences = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  getTypeBadge(type: Experience['type']): string {
    const map: Record<string, string> = {
      'full-time':  'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
      'part-time':  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
      'internship': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
      'contract':   'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
      'freelance':  'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
    };
    return map[type] ?? '';
  }
}
