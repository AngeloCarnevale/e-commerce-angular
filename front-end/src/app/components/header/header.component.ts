import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  template: `<header class="p-4">
    <div class="flex">
      <img src="/assets/Logo Vector.svg" />

      <input type="text" class="p-2 bg-[#F5F5F5]" placeholder="Search" />
      <div>
        <mat-icon
          aria-hidden="false"
          aria-label="Example home icon"
          fontIcon="person"
        ></mat-icon>
      </div>
    </div>
  </header> `,
})
export class HeaderComponent {}
