import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { TemplateAttribute } from './template-attribute';
import { TreeNode } from './tree-node';

@Component({
  selector: 'app-template-menu',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, NgFor ],
  template: `
    <ul>
      @for (node of contents; track node.id) {
        @if (node.children.length === 0) {
          <!-- leaf node -->
          <li>
            <a [routerLink]="node.slug">
              <div class="link-text" [style.padding-left]="getPaddingLeft( node )">
                {{ node.title }}
              </div>
            </a>
          </li>
        } @else {
          <!-- container node -->
          <li>
            <a [routerLink]="node.slug">
              <img src="chevron-down.svg" alt="" class="chevron">
              <div class="link-text" [style.padding-left]="getPaddingLeft( node )">
                {{ node.title }}
              </div>
            </a>
          </li>
        }
      }
    </ul>
  `,
  styleUrl: 'side-menu.scss',
})
export default class TemplateMenu {

  #root = '/src/content/templates/';
  //readonly tree: ContentNode<TemplateAttribute>[] = [];
  readonly tree: Array<TreeNode> = [];
  readonly contents: Array<TreeNode> = injectContentFiles<TemplateAttribute>(
    contentFile => contentFile.filename.startsWith( this.#root )
  )
    .map(contentFile => {
      const pos = contentFile.attributes.slug.lastIndexOf('.');
      const branch = pos < 0
        ? ''
        : `${ contentFile.attributes.slug.substring(0, pos) }`;
      return {
        id: '',
        slug: contentFile.attributes.slug,
        title: contentFile.attributes.title,
        branch: branch,
        position: contentFile.attributes.position,
        level: 0,
        children: []
      };
    });

  constructor(
    private router: Router
  ) {

    this.setNodes( '', 0, '', this.tree );
    this.contents.length = 0;
    this.flatTree( this.tree );
    this.tree.length = 0;
  }

  private setNodes(
    pid: string,
    level: number,
    branch: string,
    container: Array<TreeNode>
  ): void {

    this.contents
      .filter( node => (node.branch ?? '') === branch)
      .sort(function(a, b) {
        return a.position - b.position
      })
      .forEach( (node, i) => {
        node.id = pid ? `${pid}.${i+1}` : (i+1).toString();
        node.level = level;
        const pos = node.slug.lastIndexOf('.');
        const childBranch = pos < 0
          ? (branch ? `${branch}.${ node.slug }` : node.slug)
          : `${branch}.${ node.slug.substring( pos + 1 ) }`;
        this.setNodes( node.id, level + 1, childBranch, node.children );
        container.push( node );
      })
  }

  private flatTree(
    container: Array<TreeNode>
  ): void {

    container.forEach( node => {
      this.contents.push( node );
      this.flatTree( node.children );
    })
  }

  public getPaddingLeft(
    node: TreeNode
  ): string {

    const indent = `${(node.level) * 10}px`;
    return indent;
  }

  public getLink(
    slug: string
  ) {

    const array = slug.split('/');
    //array.unshift( 'templates' );
    return array;
  }
}
