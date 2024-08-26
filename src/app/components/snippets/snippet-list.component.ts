import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import CategoryDto from './category.dto';
import CategoryComponent from './category.component';
import { data } from '../../../data/snippet-data';

@Component({
  selector: 'app-snippet-list',
  standalone: true,
  imports: [ NgFor, CategoryComponent ],
  template: `
    <div class="container">
      @for (category of categories; track category) {
        <app-category [item]="category"></app-category>
      }
    </div>
  `,
  styleUrl: 'snippet-styles.scss',
})
export default class SnippetListComponent {
  categories: CategoryDto[] = data;
}
