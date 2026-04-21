import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly theme = inject(ThemeService);
  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education',  href: '#education' },
    { label: 'Resume',     href: '#resume' },
    { label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(href: string): void {
    this.closeMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
