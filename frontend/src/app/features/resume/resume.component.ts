import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="resume" class="section-padding">
      <div class="container-max">
        <app-section-header
          title="Resume"
          subtitle="Download my resume or view it inline below."
          badge="Resume">
        </app-section-header>

        <div class="max-w-3xl mx-auto">
          <!-- Action buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <a href="assets/resume/resume.pdf" download="Hasebul_Hassan_Resume.pdf" class="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume (PDF)
            </a>
            <a href="assets/resume/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Open in New Tab
            </a>
          </div>

          <!-- PDF Embed -->
          <div class="card overflow-hidden">
            <div class="bg-slate-100 dark:bg-slate-700 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-600">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400 ml-2 font-mono">resume.pdf</span>
            </div>
            <div class="relative bg-slate-50 dark:bg-slate-800">
              <iframe
                src="assets/resume/resume.pdf#toolbar=0"
                class="w-full"
                style="height: 700px"
                title="Hasebul Hassan Resume">
              </iframe>
              <!-- Fallback message if iframe doesn't load -->
              <div class="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 pointer-events-none opacity-0">
                <p class="text-slate-500 dark:text-slate-400 text-sm">PDF preview not available.</p>
                <a href="assets/resume/resume.pdf" download class="mt-3 btn-primary text-sm pointer-events-auto">
                  Download Instead
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ResumeComponent {}
