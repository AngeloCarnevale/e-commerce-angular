import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'input-search-brand',
  standalone: true,
  imports: [HlmInputDirective],
  template: `
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
        class="absolute left-2.5 top-2.5 h-4 w-4 text-[#989898]"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        class="flex h-10 rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#656565] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-[#F5F5F5] shadow-none appearance-none pl-8 md:w-2/3 lg:w-[256px] border-none"
        hlmInput
        placeholder="Search"
        type="search"
      />
    </div>
  `,
})
export class InputSearchBrand {}
