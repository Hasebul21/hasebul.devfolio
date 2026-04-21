import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly roles = [
    'Full-Stack Developer',
    'Software Engineer',
    'Open Source Contributor',
    'Problem Solver',
  ];

  readonly currentRoleIndex = 0;
  currentRole = this.roles[0];

  readonly stats = [
    { value: '3+',    label: 'Years Coding' },
    { value: '20+',   label: 'Projects Built' },
    { value: '8+',    label: 'Clients Served' },
    { value: '5★',    label: 'Client Rating' },
  ];

  scrollToSection(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
