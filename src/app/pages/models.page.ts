import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ModelMenu from '../components/model.menu';

@Component({
  standalone: true,
  imports: [ RouterOutlet, ModelMenu ],
  template: `
    <aside class="model-menu">
      <app-model-menu></app-model-menu>
    </aside>
    <main class="fill-remaining-space">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: 'content-layout.scss',
})
export default class ModelsPage { }
