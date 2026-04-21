import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-4">
      @if (badge) {
        <span class="tag mb-3 inline-block">{{ badge }}</span>
      }
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{{ title }}</h2>
      @if (subtitle) {
        <p class="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{{ subtitle }}</p>
      }
      <div class="section-divider"></div>
    </div>
  `,
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() badge?: string;
}
