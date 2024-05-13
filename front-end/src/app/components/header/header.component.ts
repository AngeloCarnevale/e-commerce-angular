import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideShoppingCart, lucideHeart, lucideUser } from '@ng-icons/lucide';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, FormsModule, HlmInputModule, HlmIconComponent, RouterLink],
  providers: [provideIcons({ lucideShoppingCart, lucideHeart, lucideUser })],
  template: `<header
    class="flex items-center justify-between bg-white px-40 py-4 text-white shadow border-b-gray-300 md:px-6"
  >
    <nav class="flex justify-between items-center w-full gap-3">
      <div>
        <button class="text-black cursor-pointer font-medium" routerLink="/">E-ccomerce</button>
      </div>
      <div class="relative">
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
          class="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          hlmInput
          class="flex text-black h-9 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
          [(ngModel)]="inputValue"
          placeholder="Search"
          (keyup.enter)="searchProducts($event)"
        />
      </div>
      <div class="flex items-center gap-6">
        <button routerLink="/wishlist" class="flex items-center">
          <hlm-icon
            name="lucideHeart"
            class="size-6"
            color="black"
          ></hlm-icon>
        </button>
        <button routerLink="/cart" class="flex items-center">
          <hlm-icon
            name="lucideShoppingCart"
            class="size-6"
            color="black"
          ></hlm-icon>
        </button>
        <button routerLink="/profile" class="flex items-center">
          <hlm-icon
            name="lucideUser"
            class="size-6"
            color="black"
          ></hlm-icon>
        </button>
      </div>
    </nav>
  </header> `,
})
export class HeaderComponent {
  constructor(private route: Router) {}

  inputValue = '';

  searchProducts(e: any): void {
    if (this.inputValue.trim() !== '') {
      const queryParams = { search: this.inputValue };
      this.route.navigate(['products'], {
        queryParams: queryParams,
      });
    }
  }
}
