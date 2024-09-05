import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterOutlet ],
  template: `
    <article>
      <router-outlet></router-outlet>
    </article>
  `,
  styles: 'article { padding: 0 20px 10px 20px; }',
})
export default class TemplatesPage { }
