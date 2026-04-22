import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionHeaderComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly sending = signal(false);
  readonly sent    = signal(false);
  readonly error   = signal('');

  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  readonly socials = [
    { label: 'GitHub',   url: 'https://github.com/hasebul',      icon: 'github',   value: '@hasebul' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/hasebul', icon: 'linkedin', value: 'in/hasebul' },
    { label: 'Email',    url: 'mailto:hasebul@example.com',      icon: 'email',    value: 'hasebul@example.com' },
  ];

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    this.error.set('');

    const payload = this.form.value as { name: string; email: string; subject: string; message: string; };
    const mailto = `mailto:hasebulhassan21@gmail.com?subject=${encodeURIComponent(payload.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${payload.name || ''}\nEmail: ${payload.email || ''}\n\n${payload.message || ''}`,
    )}`;
    window.location.href = mailto;
    this.sent.set(true);
    this.sending.set(false);
    this.form.reset();
  }

  resetForm(): void {
    this.sent.set(false);
    this.error.set('');
  }
}
