import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../core/services/skills.service';
import { SkillGroup } from '../../core/models/skill.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardSkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardSkeletonComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  private readonly skillsService = inject(SkillsService);

  skillGroups: SkillGroup[] = [];
  loading = true;

  ngOnInit(): void {
    this.skillsService.getStaticSkills().subscribe({
      next: groups => {
        this.skillGroups = groups;
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      languages: 'from-purple-500 to-indigo-500',
      frameworks: 'from-blue-500 to-cyan-500',
      tools:      'from-orange-500 to-amber-500',
      databases:  'from-green-500 to-teal-500',
      cloud:      'from-sky-500 to-blue-500',
      'ai-ml':    'from-pink-500 to-rose-500',
      other:      'from-slate-500 to-gray-500',
    };
    return colors[category] ?? colors['other'];
  }

  getProficiencyLabel(n: number): string {
    if (n >= 90) return 'Expert';
    if (n >= 75) return 'Advanced';
    if (n >= 60) return 'Intermediate';
    return 'Beginner';
  }
}
