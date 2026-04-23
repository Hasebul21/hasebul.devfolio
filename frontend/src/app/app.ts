import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { NzLayoutModule }   from 'ng-zorro-antd/layout';
import { NzTabsModule }     from 'ng-zorro-antd/tabs';
import { NzCardModule }     from 'ng-zorro-antd/card';
import { NzButtonModule }   from 'ng-zorro-antd/button';
import { NzTagModule }      from 'ng-zorro-antd/tag';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzGridModule }     from 'ng-zorro-antd/grid';
import { NzAvatarModule }   from 'ng-zorro-antd/avatar';
import { NzDividerModule }  from 'ng-zorro-antd/divider';
import { NzBadgeModule }    from 'ng-zorro-antd/badge';
import { NzFormModule }     from 'ng-zorro-antd/form';
import { NzInputModule }    from 'ng-zorro-antd/input';
import { NzSwitchModule }   from 'ng-zorro-antd/switch';
import { NzIconModule }     from 'ng-zorro-antd/icon';
import { NzTooltipModule }  from 'ng-zorro-antd/tooltip';
import { NzResultModule }   from 'ng-zorro-antd/result';
import { NzMessageService } from 'ng-zorro-antd/message';

import { SkillsService }     from './core/services/skills.service';
import { ProjectsService }   from './core/services/projects.service';
import { ExperienceService } from './core/services/experience.service';
import { SkillGroup }        from './core/models/skill.model';
import { Project }           from './core/models/project.model';
import { Experience }        from './core/models/experience.model';
import { Education }         from './core/models/contact.model';

export interface Publication {
  title: string;
  venue: string;
  year: string;
  status: string;
  type: string;
  url?: string;
  tags: string[];
  description?: string;
}

export interface Award {
  title: string;
  detail: string;
  icon: string;
  url?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    NzLayoutModule, NzTabsModule, NzCardModule, NzButtonModule,
    NzTagModule, NzProgressModule, NzTimelineModule, NzGridModule,
    NzAvatarModule, NzDividerModule, NzBadgeModule,
    NzFormModule, NzInputModule, NzSwitchModule,
    NzIconModule, NzTooltipModule, NzResultModule,
  ],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly skillsSvc     = inject(SkillsService);
  private readonly projectsSvc   = inject(ProjectsService);
  private readonly experienceSvc = inject(ExperienceService);
  private readonly fb            = inject(FormBuilder);
  private readonly msg           = inject(NzMessageService);

  isDark  = signal(false);
  selectedTab = 0;
  // Tabs: 0=Home, 1=Skills, 2=Projects, 3=Experience, 4=Research, 5=Contact

  skillGroups: SkillGroup[] = [];
  allProjects: Project[]    = [];
  experiences: Experience[] = [];
  education: Education[]    = [];

  activeFilter = 'All';

  get allTags(): string[] {
    const tags = new Set<string>();
    this.allProjects.forEach(p => p.techStack.forEach(t => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.techStack.includes(this.activeFilter));
  }

  readonly publications: Publication[] = [
    {
      title: 'Machine Learning-Based Early Risk Stratification Framework for Chronic Kidney Disease Progression',
      venue: 'IEEE ICSFT 2026',
      year: '2024–2025',
      status: 'Accepted — Oral Presentation',
      type: 'Conference',
      tags: ['Machine Learning', 'Healthcare', 'CKD', 'IEEE', 'Oral Presentation'],
      description: 'Proposed a multi-domain ML framework integrating demographic, biochemical, and longitudinal clinical data to enable early identification of high-risk CKD patients.',
    },
    {
      title: 'AI-Enhanced Prediction of Respiratory Irritation from Biomass Combustion Byproducts',
      venue: 'ICCCES 2026',
      year: '2024–2025',
      status: 'Accepted',
      type: 'Conference',
      url: 'https://ieeexplore.ieee.org/document/11437157',
      tags: ['Random Forest', 'LSTM', 'Machine Learning', 'Healthcare', 'AI'],
      description: 'Developed a hybrid Random Forest–LSTM pipeline combining environmental and clinical biomarkers to predict respiratory irritation and identify key combustion-related risk factors.',
    },
  ];

  readonly certifications = [
    {
      title: 'Secure Coding & Application Security',
      issuer: 'SecureFlag',
      detail: 'Hands-on training on secure coding practices, OWASP Top 10 vulnerabilities, and real-world exploitation scenarios.',
      icon: 'safety',
      color: '#52c41a',
    },
    {
      title: 'Data Structures',
      issuer: 'University of California San Diego (Coursera)',
      detail: 'Fundamental data structures, algorithm design, and performance optimisation techniques.',
      icon: 'experiment',
      color: '#1890ff',
    },
  ];

  readonly awards: Award[] = [
    {
      title: 'Solved 2100+ Programming Problems',
      detail: 'Across Codeforces, AtCoder, CodeChef, and LeetCode',
      icon: 'code',
      url: 'https://www.stopstalk.com/user/profile/WA_TLE',
    },
    {
      title: 'LeetCode Top 7.6% Globally',
      detail: 'Solved 800+ problems on LeetCode',
      icon: 'trophy',
      url: 'https://leetcode.com/u/Hasebul/',
    },
    {
      title: '10th Place — Intra AIUB Programming Contest',
      detail: 'Fall 2021–22, out of 70+ contestants',
      icon: 'star',
      url: 'https://oj.synapse0.com/standings.php?contest=1013',
    },
    {
      title: '6th Place — AIUB CS Fest 2018',
      detail: 'Programming Contest, out of 60+ contestants',
      icon: 'fire',
      url: 'https://toph.co/c/aiub-cs-fest-2018-j/standings?fbclid=IwZXh0bgNhZW0CMTAAAR3un6HfOC8BeNZMMR2WJLkIbe8SCzjWHDPehn4qMLL1Qapd6vSqSZzcTpo_aem_AVQFgnEO-jO9ZM_k8ZP8LyMfDOFWRzFGrGtMqGEVzkKUIbQFSQ5FUvkVmzdlk3P4Yf2cnTp_ZuiRlCAK70Jb4DD_',
    },
  ];

  readonly researchInterests = `My research interests lie at the intersection of machine learning and software systems, with a focus on building intelligent, data-driven solutions for large-scale, real-world applications. I am particularly interested in applying machine learning for systems optimisation — including intelligent log analysis for automated incident detection in microservices, predictive caching and adaptive TTL optimisation, and workload-aware database tuning using lightweight and interpretable models.

I aim to design efficient and scalable ML-driven systems that improve reliability, performance, and observability in distributed environments. My work emphasises practical, production-ready solutions combining anomaly detection, time-series modelling, and reinforcement learning with system-level insights from logs, traces, and query workloads.

Additionally, I am interested in MLOps practices (model versioning, monitoring, and deployment), data-centric AI development, and the integration of ML models into complex software infrastructures — building robust, interpretable, and maintainable systems that align with real-world DevOps and SRE constraints.`;

  sending = false;
  sent    = false;
  contactForm = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  ngOnInit(): void {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark') this.applyTheme(true);

    this.skillsSvc.getStaticSkills().subscribe(g => this.skillGroups = g);
    this.projectsSvc.getStaticProjects().subscribe(p => this.allProjects = p);
    this.experienceSvc.getStaticExperiences().subscribe(e => this.experiences = e);
    this.experienceSvc.getStaticEducation().subscribe(e => this.education = e);
  }

  toggleTheme(): void { this.applyTheme(!this.isDark()); }

  private applyTheme(dark: boolean): void {
    this.isDark.set(dark);
    document.body.classList.toggle('dark-theme', dark);
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }

  setFilter(tag: string): void { this.activeFilter = tag; }

  submitContact(): void {
    if (this.contactForm.invalid) {
      Object.values(this.contactForm.controls).forEach(c => { c.markAsDirty(); c.updateValueAndValidity(); });
      return;
    }
    const { name, email, subject, message } = this.contactForm.value as any;
    const mailto = `mailto:hasebulhassan21@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${name || ''}\nEmail: ${email || ''}\n\n${message || ''}`,
    )}`;
    window.location.href = mailto;
    this.sent = true;
    this.msg.success('Opened your email client.');
  }

  resetContact(): void { this.sent = false; this.contactForm.reset(); }

  getCategoryColor(cat: string): string {
    const m: Record<string, string> = {
      languages: '#722ed1', frameworks: '#1890ff', tools: '#13c2c2',
      databases: '#52c41a', cloud: '#fa8c16', 'ai-ml': '#eb2f96', other: '#8c8c8c',
    };
    return m[cat] ?? '#8c8c8c';
  }

  getTypeBadgeColor(type: string): string {
    const m: Record<string, string> = {
      'full-time': 'green', 'part-time': 'blue',
      'internship': 'purple', 'contract': 'orange', 'freelance': 'cyan',
    };
    return m[type] ?? 'default';
  }
}
