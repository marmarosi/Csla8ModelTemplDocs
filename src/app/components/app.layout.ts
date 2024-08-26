import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ RouterLink, RouterOutlet ],
  templateUrl: 'app.layout.html',
  styleUrl: 'app.layout.scss',
})
export class AppLayout {

  get year(): number {
    return new Date().getFullYear();
  }
}
