import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import CategoryDto from './category.dto';
import ModelComponent from './model.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ NgFor, ModelComponent ],
  template: `
    <div>
      <div class="category">{{ item.category }}</div>
        @for (model of item.models; track model) {
          <app-model [model]="model"></app-model>
        }
    </div>
  `,
  styleUrl: 'snippet-styles.scss',
})
export default class CategoryComponent {
  @Input() item!: CategoryDto;
}
