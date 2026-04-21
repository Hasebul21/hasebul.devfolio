import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">HH</div>
              <span class="font-bold text-lg">Hasebul Hassan</span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Full-stack developer passionate about building elegant, scalable software solutions.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Quick Links</h4>
            <div class="flex flex-col gap-2">
              @for (link of quickLinks; track link.label) {
                <a [href]="link.href" class="text-slate-400 hover:text-primary-400 text-sm transition-colors">{{ link.label }}</a>
              }
            </div>
          </div>

          <!-- Social -->
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Connect</h4>
            <div class="flex gap-3">
              @for (social of socials; track social.label) {
                <a [href]="social.url" target="_blank" rel="noopener noreferrer"
                   class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <span class="sr-only">{{ social.label }}</span>
                  <span class="text-xs font-bold">{{ social.icon }}</span>
                </a>
              }
            </div>
          </div>
        </div>

        <div class="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-slate-500 text-sm">© {{ year }} Hasebul Hassan. Built with Angular & Spring Boot.</p>
          <p class="text-slate-500 text-sm">Made with ♥ in Bangladesh</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'About',      href: '#about' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ];

  readonly socials = [
    { label: 'GitHub',   url: 'https://github.com/hasebul',           icon: 'GH' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/hasebul',      icon: 'LI' },
    { label: 'Twitter',  url: 'https://twitter.com/hasebul',          icon: 'TW' },
    { label: 'Email',    url: 'mailto:hasebul@example.com',           icon: '@' },
  ];
}
