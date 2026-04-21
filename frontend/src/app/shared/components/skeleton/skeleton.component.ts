import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'skeleton ' + extraClass" [style.height]="height" [style.width]="width"></div>
  `,
})
export class SkeletonComponent {
  @Input() height = '1rem';
  @Input() width  = '100%';
  @Input() extraClass = '';
}

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  template: `
    <div class="card p-6 space-y-4">
      <app-skeleton height="1.5rem" width="70%"></app-skeleton>
      <app-skeleton height="1rem"></app-skeleton>
      <app-skeleton height="1rem"></app-skeleton>
      <app-skeleton height="1rem" width="80%"></app-skeleton>
      <div class="flex gap-2 pt-2">
        <app-skeleton height="1.5rem" width="4rem" extraClass="rounded-full"></app-skeleton>
        <app-skeleton height="1.5rem" width="4rem" extraClass="rounded-full"></app-skeleton>
        <app-skeleton height="1.5rem" width="4rem" extraClass="rounded-full"></app-skeleton>
      </div>
    </div>
  `,
})
export class CardSkeletonComponent {}
