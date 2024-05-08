import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { AccordionSmartphoneComponent } from './_components/accordion-smartphone/accordion-smartphone.component';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { UpscalePipe } from '../../pipes/upscale.pipe';
import { HlmPaginationModule } from '@spartan-ng/ui-pagination-helm';
import { PaginationComponent } from './_components/pagination/pagination.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AccordionSmartphoneComponent,
    RouterLink,
    CommonModule,
    HlmButtonModule,
    UpscalePipe,
    HlmPaginationModule,
    PaginationComponent
  ],
  providers: [ProductService],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  thumbnail!: string;

  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts() {
    this.service.getProducts('smartphone').subscribe((data: any) => {
      this.products = data.results;
      console.log(data.results);
    });
  }
}
