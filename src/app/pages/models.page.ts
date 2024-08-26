import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ModelListComponent from '../components/models.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, ModelListComponent ],
  template: `
    <aside class="model-menu">
      <app-model-list></app-model-list>
    </aside>
    <main class="fill-remaining-space">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: 'content-layout.scss',
})
export default class ModelsPage { }
