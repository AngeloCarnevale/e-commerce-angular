import { Component } from '@angular/core';
import {
  HlmPaginationContentDirective,
  HlmPaginationDirective,
  HlmPaginationEllipsisComponent,
  HlmPaginationItemDirective,
  HlmPaginationLinkDirective,
  HlmPaginationNextComponent,
  HlmPaginationPreviousComponent,
} from '@spartan-ng/ui-pagination-helm';

@Component({
  selector: 'pagination-component',
  standalone: true,
  imports: [
    HlmPaginationContentDirective,
    HlmPaginationDirective,
    HlmPaginationEllipsisComponent,
    HlmPaginationItemDirective,
    HlmPaginationLinkDirective,
    HlmPaginationNextComponent,
    HlmPaginationPreviousComponent,
  ],
  template: `
    <nav hlmPagination>
      <ul hlmPaginationContent>
        <li hlmPaginationItem>
          <hlm-pagination-previous link="/components/menubar" />
        </li>
        <li hlmPaginationItem>
          <a hlmPaginationLink link="#">1</a>
        </li>
        <li hlmPaginationItem>
          <a hlmPaginationLink link="#" isActive>2</a>
        </li>
        <li hlmPaginationItem>
          <a hlmPaginationLink link="#">3</a>
        </li>
        <li hlmPaginationItem>
          <hlm-pagination-ellipsis />
        </li>
        <li hlmPaginationItem>
          <hlm-pagination-next link="/components/popover" />
        </li>
      </ul>
    </nav>
  `,
})
export class PaginationComponent {}