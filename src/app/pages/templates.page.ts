import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TemplateListComponent from '../components/templates.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, TemplateListComponent ],
  template: `
    <aside class="template-menu">
      <app-template-list></app-template-list>
    </aside>
    <main class="fill-remaining-space">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: 'content-layout.scss',
})
export default class TemplatesPage { }
