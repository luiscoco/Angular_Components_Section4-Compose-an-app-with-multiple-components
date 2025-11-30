
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="sidebar">
      <h3>Sections</h3>
      <ul>
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 200px;
      padding: 1rem;
      background: #f5f5f5;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      padding: 0.25rem 0;
    }
  `]
})
export class SidebarComponent {}
