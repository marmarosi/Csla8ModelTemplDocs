import { Component, Input } from '@angular/core';
import SnippetDto from './snippet.dto';

@Component({
  selector: '[app-snippet]',
  standalone: true,
  template: `
    <td class="left">{{ snippet.title }}</td>
    <td class="left">{{ snippet.shortcut }}</td>
    <td class="left">{{ snippet.fileName }}</td>
    <td class="param">{{ snippet.rootName }}</td>
    <td class="param">{{ snippet.rootModel }}</td>
    <td class="param">{{ snippet.rootVariable }}</td>
    <td class="param">{{ snippet.childName }}</td>
    <td class="param">{{ snippet.childModel }}</td>
    <td class="param">{{ snippet.childVariable }}</td>
    <td class="param">{{ snippet.commandName }}</td>
    <td class="param">{{ snippet.commandModel }}</td>
    <td class="param">{{ snippet.dbContext }}</td>
  `,
  styleUrl: 'snippet-styles.scss',
})
export default class SnippetComponent {
  @Input() snippet!: SnippetDto;
}
