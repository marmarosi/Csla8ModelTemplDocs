import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export default class ToggleModelService {

  private activeCode?: string;

  toggle(
    code: string,
  ): void {

    if (this.activeCode === code) {
      const div = document.getElementById( code );
      div!.style.display = div!.style.display === 'none' ? 'block' : 'none';
    }
    else {
      if (this.activeCode)
        document.getElementById( this.activeCode )!.style.display = 'none';
      document.getElementById( code )!.style.display = 'block';
    }
    this.activeCode = code;
  }
}
