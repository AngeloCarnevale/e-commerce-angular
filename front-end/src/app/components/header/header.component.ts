import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  template: `<header
    class="flex items-center justify-between bg-gray-900 px-4 py-3 text-white shadow-md md:px-6"
  >
    <a class="flex items-center gap-2" href="#">
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
        class="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span class="text-lg font-semibold">Acme Store</span>
    </a>
    <nav class="hidden items-center gap-4 md:flex">
      <a class="hover:underline" href="#"> Home </a>
      <a class="hover:underline" href="#"> Products </a>
      <a class="hover:underline" href="#"> Cart </a>
      <a class="hover:underline" href="#"> Account </a>
    </nav>
    <div class="flex items-center gap-4">
     
    </div>
  </header> `,
})
export class HeaderComponent {}
