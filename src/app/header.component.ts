
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>My Angular App</h1>
      <nav>
        <a>Home</a>
        <a>Products</a>
        <a>Contact</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1.5rem;
      background: #0d47a1;
      color: white;
    }

    nav a {
      margin-left: 1rem;
      cursor: pointer;
    }
  `]
})
export class HeaderComponent {}
