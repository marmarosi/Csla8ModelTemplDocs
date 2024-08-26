import { Component, inject, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import ModelDto from './model.dto';
import SnippetComponent from './snippet.component';
import ToggleModelService from './toggle-model.service';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [ NgFor, SnippetComponent ],
  template: `
    <section>
      <div (click)="toggleModel()" class="model">
        {{ model.name }}
        <div class="right">{{ model.code }}</div>
      </div>
      <div [id]="model.code" class="snippets">
        <table class="list">
          <thead>
            <tr>
              <th class="description">Snippet</th>
              <th class="shortcut">Shortcut</th>
              <th class="filename">File Name</th>
              <th class="param">rn</th>
              <th class="param">RM</th>
              <th class="param">rv</th>
              <th class="param">cn</th>
              <th class="param">CM</th>
              <th class="param">cv</th>
              <th class="param">cmd</th>
              <th class="param">CMD</th>
              <th class="param">ctx</th>
            </tr>
          </thead>
          <tbody>
            @for (snippet of model.snippets; track snippet) {
              <tr app-snippet [snippet]="snippet"></tr>
            }
          </tbody>
        </table>
      </div>
    </section>
  `,
  styleUrl: 'snippet-styles.scss',
})
export default class ModelComponent {
  @Input() model!: ModelDto;

  private service = inject( ToggleModelService );

  toggleModel() {
    this.service.toggle( this.model!.code! );
  }
}
