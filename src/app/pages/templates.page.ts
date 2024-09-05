import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TemplateMenu from '../components/template.menu';

@Component({
  standalone: true,
  imports: [ RouterOutlet, TemplateMenu ],
  template: `
    <aside class="template-menu">
      <app-template-menu></app-template-menu>
    </aside>
    <main class="fill-remaining-space">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: 'content-layout.scss',
})
export default class TemplatesPage { }
