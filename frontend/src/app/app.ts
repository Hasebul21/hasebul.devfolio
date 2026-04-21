import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }    from './shared/components/navbar/navbar.component';
import { FooterComponent }    from './shared/components/footer/footer.component';
import { HeroComponent }      from './features/hero/hero.component';
import { AboutComponent }     from './features/about/about.component';
import { SkillsComponent }    from './features/skills/skills.component';
import { ProjectsComponent }  from './features/projects/projects.component';
import { ExperienceComponent }from './features/experience/experience.component';
import { EducationComponent } from './features/education/education.component';
import { ResumeComponent }    from './features/resume/resume.component';
import { ContactComponent }   from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ResumeComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-education></app-education>
      <app-resume></app-resume>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
})
export class App {}
