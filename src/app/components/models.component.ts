import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { ModelAttribute } from './model-attribute';

@Component({
  selector: 'app-model-list',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, NgFor ],
  template: `
    <ul>
      <li *ngFor="let content of contents">
        <a [routerLink]="['/models', content.slug]">
          {{ content.attributes.title }}
        </a>
      </li>
    </ul>
  `,
  styleUrl: 'side-menu.scss',
})
export default class ModelListComponent {
  readonly contents = injectContentFiles<ModelAttribute>(
    (contentFile) => {
      console.log (contentFile.filename);
      return contentFile.filename.startsWith( '/src/content/models/' );
    }
  )
    .sort(function(a, b) {
      return a.attributes.position - b.attributes.position
    });
}
