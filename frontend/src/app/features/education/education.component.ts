import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../core/services/experience.service';
import { Education } from '../../core/models/contact.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="education" class="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div class="container-max">
        <app-section-header
          title="Education"
          subtitle="Academic background and formal training."
          badge="Education">
        </app-section-header>

        <div class="grid gap-6 max-w-3xl mx-auto">
          @for (edu of education; track edu.id) {
            <div class="card p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300">
              <div class="flex flex-col sm:flex-row sm:items-start gap-4">
                <!-- Icon -->
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white text-2xl shrink-0">
                  🎓
                </div>
                <div class="flex-1">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 class="font-bold text-lg text-slate-900 dark:text-white leading-tight">{{ edu.institution }}</h3>
                      <p class="text-primary-600 dark:text-primary-400 font-semibold text-sm mt-0.5">
                        {{ edu.degree }} in {{ edu.field }}
                      </p>
                    </div>
                    <div class="text-right shrink-0">
                      <p class="text-xs font-mono text-slate-500 dark:text-slate-500">
                        {{ edu.startYear }} – {{ edu.current ? 'Present' : edu.endYear }}
                      </p>
                      @if (edu.current) {
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300">
                          <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          Ongoing
                        </span>
                      }
                    </div>
                  </div>

                  <div class="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>📍 {{ edu.location }}</span>
                    @if (edu.gpa) {
                      <span class="font-semibold text-primary-600 dark:text-primary-400">{{ edu.gpa }}</span>
                    }
                  </div>

                  @if (edu.description) {
                    <p class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ edu.description }}</p>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent implements OnInit {
  private readonly experienceService = inject(ExperienceService);
  education: Education[] = [];

  ngOnInit(): void {
    this.experienceService.getStaticEducation().subscribe(data => this.education = data);
  }
}
