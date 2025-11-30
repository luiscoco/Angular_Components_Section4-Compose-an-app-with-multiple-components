
import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { ContentCardComponent } from './content-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ContentCardComponent],
  template: `
    <div class="page">
      <app-header></app-header>

      <main class="layout">
        <app-sidebar></app-sidebar>

        <section class="layout-main">
          <h2>Section 4 – Composing an Application</h2>
          <p>This layout combines header, sidebar, and reusable content cards.</p>

          <app-content-card
            title="Sales Overview"
            description="Summary of sales performance for the current quarter.">
          </app-content-card>

          <app-content-card
            title="Team Status"
            description="Updates from different teams and ongoing initiatives.">
          </app-content-card>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      background: #f3f4f6;
    }

    .layout {
      display: flex;
      min-height: calc(100vh - 56px);
    }

    .layout-main {
      flex: 1;
      padding: 1rem 1.5rem;
      background: #fafafa;
    }

    @media (max-width: 768px) {
      .layout {
        flex-direction: column;
      }
    }
  `]
})
export class AppComponent {}
