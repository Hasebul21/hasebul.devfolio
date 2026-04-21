import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly highlights = [
    { icon: '🎓', label: 'CS & Engineering at BUET' },
    { icon: '💻', label: '3+ years of software development' },
    { icon: '🌍', label: 'Based in Dhaka, Bangladesh' },
    { icon: '🚀', label: 'Open source contributor' },
  ];

  readonly interests = ['Software Architecture', 'AI & Machine Learning', 'IoT Systems', 'Open Source', 'Competitive Programming', 'Tech Writing'];

  readonly publications = [
    {
      title: 'AI-Enhanced Prediction of Respiratory Irritation From Biomass Combustion Byproducts: An Integrative Machine Learning Framework for Sustainable Bioenergy Systems',
      publisher: 'IEEE',
      year: '2025',
      url: 'https://ieeexplore.ieee.org/document/11437157',
      doi: '10.1109/ICAICT65506.2025.11437157',
      tags: ['Machine Learning', 'AI', 'Bioenergy', 'Healthcare'],
    },
  ];
}
