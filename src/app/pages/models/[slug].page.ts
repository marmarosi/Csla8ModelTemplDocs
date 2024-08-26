import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { ModelAttribute } from '../../components/model-attribute';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [ MarkdownComponent, AsyncPipe, NgIf ],
  template: `
    <ng-container *ngIf="model$ | async as model">
      <h2>{{ model.attributes.title }}</h2>
      <analog-markdown [content]="model.content"></analog-markdown>
    </ng-container>
  `,
})
export default class ModelPage {
  readonly model$ = injectContent<ModelAttribute>({
    param: 'slug',
    subdirectory: 'models',
  });
}
