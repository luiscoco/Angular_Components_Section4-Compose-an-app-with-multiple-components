
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  template: `
    <article class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </article>
  `,
  styles: [`
    .card {
      border-radius: 8px;
      border: 1px solid #ddd;
      padding: 1rem;
      margin-bottom: 0.75rem;
      background: white;
    }

    h2 {
      margin-top: 0;
    }
  `]
})
export class ContentCardComponent {
  @Input() title = '';
  @Input() description = '';
}
