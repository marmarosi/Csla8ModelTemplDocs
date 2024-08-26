import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { TemplateAttribute } from './template-attribute';

@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, NgFor ],
  template: `
    <ul>
      <li *ngFor="let content of contents">
        <a [routerLink]="['/templates', content.slug]">
          {{ content.attributes.title }}
        </a>
      </li>
    </ul>
  `,
  styleUrl: 'side-menu.scss',
})
export default class TemplateListComponent {
  readonly contents = injectContentFiles<TemplateAttribute>(
    (contentFile) => {
      console.log (contentFile.filename);
      return contentFile.filename.startsWith( '/src/content/templates/' );
    }
  );
}
