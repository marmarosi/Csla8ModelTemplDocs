import { Component } from '@angular/core';
import SnippetListComponent from '../../components/snippets/snippet-list.component';
import SnippetNotesComponent from '../../components/snippets/snippet-notes.component';

@Component({
  standalone: true,
  imports: [ SnippetListComponent, SnippetNotesComponent ],
  template: `
     <h2>CSLA 8 REST API Code Snippets</h2>
     <app-snippet-list></app-snippet-list>
     <div>&nbsp;</div>
     <app-snippet-notes></app-snippet-notes>
  `,
})
export default class SnippetsPage { }
