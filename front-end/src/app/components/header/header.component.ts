import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, HttpClientModule],
  providers: [ProductService],
  template: `<header
    class="flex items-center justify-between bg-white px-4 py-6 text-white shadow-md md:px-6"
  >
    <nav class="flex justify-center w-full gap-3">
      <input class="bg-gray-200 rounded w-[500px]" />
      <button class="px-4 bg-blue-500 rounded" (click)="searchProducts($event)">
        Search
      </button>
    </nav>
  </header> `,
})
export class HeaderComponent {
  constructor(private service: ProductService) {}

  inputValu

  searchProducts(e: any): void {
    console.log(e.target.value);
  }
}
