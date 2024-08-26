import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { TemplateAttribute } from '../../components/template-attribute';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [ MarkdownComponent, AsyncPipe, NgIf ],
  template: `
    <ng-container *ngIf="template$ | async as template">
      <h2>{{ template.attributes.title }}</h2>
      <analog-markdown [content]="template.content"></analog-markdown>
    </ng-container>
  `,
})
export default class TemplatePage {
  readonly template$ = injectContent<TemplateAttribute>({
    param: 'slug',
    subdirectory: 'templates',
  });
}
