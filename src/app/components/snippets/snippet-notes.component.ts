import { Component } from '@angular/core';

@Component({
  selector: 'app-snippet-notes',
  standalone: true,
  template: `
    <h3>Column labels</h3>
    <p>The following table explains the columns containing the snippet parameters
      to be replaced during code generation:</p>
    <table class="simple">
      <thead>
      <tr>
        <th class="cl-abbr">Abbreviation</th>
        <th class="cl-param">Stands for parameter</th>
        <th class="cl-desc">Description</th>
        <th class="cl-example">Example</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="left">rn</td>
        <td class="left">root_name</td>
        <td class="left">textual description of the root model in comments</td>
        <td class="left">order</td>
      </tr>
      <tr>
        <td class="left">RM</td>
        <td class="left">ROOT_MODEL</td>
        <td class="left">the name of the root model</td>
        <td class="left">Order</td>
      </tr>
      <tr>
        <td class="left">rv</td>
        <td class="left">root_variable</td>
        <td class="left">the name of the variable for the root model</td>
        <td class="left">order</td>
      </tr>
      <tr>
        <td class="left">cn</td>
        <td class="left">child_name</td>
        <td class="left">textual description of the child model in comments</td>
        <td class="left">order line</td>
      </tr>
      <tr>
        <td class="left">CM</td>
        <td class="left">CHILD_MODEL</td>
        <td class="left">the name of the child model</td>
        <td class="left">OrderLine</td>
      </tr>
      <tr>
        <td class="left">cv</td>
        <td class="left">child_variable</td>
        <td class="left">the name of the variable for the child model</td>
        <td class="left">orderLine</td>
      </tr>
      <tr>
        <td class="left">cmd</td>
        <td class="left">command_name</td>
        <td class="left">textual description of the command in comments</td>
        <td class="left">set order status</td>
      </tr>
      <tr>
        <td class="left">CMD</td>
        <td class="left">COMMAND_MODEL</td>
        <td class="left">the name of the command model</td>
        <td class="left">SetOrderStatus</td>
      </tr>
      <tr>
        <td class="left">ctx</td>
        <td class="left">DB_CONTEXT</td>
        <td class="left">the name of the database context</td>
        <td class="left">ShopDbContext</td>
      </tr>
      </tbody>
    </table>
    <h3>File names</h3>
    <p>The file name column shows the suggested file name for the particular
      building block, where:</p>
    <table class="simple">
      <thead>
      <tr>
        <th class="cl-abbr">Notation</th>
        <th class="cl-desc">Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="left">===</td>
        <td class="left">represents the root model name</td>
      </tr>
      <tr>
        <td class="left">---</td>
        <td class="left">represents the child model name</td>
      </tr>
      <tr>
        <td class="left">+++</td>
        <td class="left">represents the command model name</td>
      </tr>
      </tbody>
    </table>
  `,
  styleUrl: 'snippet-styles.scss',
})
export default class SnippetNotesComponent { }
