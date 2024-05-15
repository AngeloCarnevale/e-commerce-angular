import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-detail-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  template: `<nav aria-label="breadcrumb" class="py-[40px]">
    <ol
      class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5"
    >
      <li class="inline-flex items-center gap-1.5">
        <a
          class="transition-colors hover:text-foreground"
          routerLink="/"
          __child="Home"
        >
          Home
        </a>
      </li>
      <li aria-hidden="true" class="[&amp;>svg]:size-3.5" role="presentation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li class="inline-flex items-center gap-1.5">
        <a
          class="transition-colors hover:text-foreground"
          routerLink="/products"
          __child="Components"
        >
          Catalog
        </a>
      </li>
      <li aria-hidden="true" class="[&amp;>svg]:size-3.5" role="presentation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li class="inline-flex items-center gap-1.5">
        <a
          class="transition-colors hover:text-foreground"
          routerLink="/products"
        >
          Smartphones
        </a>
      </li>
      <li aria-hidden="true" class="[&amp;>svg]:size-3.5" role="presentation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li class="inline-flex items-center gap-1.5">
        <span
          aria-current="page"
          aria-disabled="true"
          class="font-semibold text-foreground truncate w-44"
          role="link"
        >
          {{ product_name }}
        </span>
      </li>
    </ol>
  </nav>`,
})
export class BreadcrumbProductDetailComponent {
  @Input() product_name!: string;
}
