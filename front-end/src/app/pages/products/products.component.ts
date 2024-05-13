import { Component, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { AccordionSmartphoneComponent } from './_components/accordion-smartphone/accordion-smartphone.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { UpscalePipe } from '../../pipes/upscale.pipe';
import { HlmPaginationModule } from '@spartan-ng/ui-pagination-helm';
import { PaginationComponent } from './_components/pagination/pagination.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { Title } from '@angular/platform-browser';

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
    PaginationComponent,
    LoadingComponent,
  ],
  providers: [ProductService],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  thumbnail!: string;
  loading!: boolean;
  title:Title = inject(Title);

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (!params['search']) {
        this.router.navigate(['/']);
      }
      const searchParam = params['search'];
      this.title.setTitle(`${searchParam} | Eccomerce 📦️`);
      console.log(searchParam);
      this.searchProducts(searchParam);
    });
  }
  searchProducts(param: string) {
    this.loading = true;
    this.service.getProducts(param).subscribe((data: any) => {
      this.products = data.results;
      this.loading = false;
      console.log(data.results);
    });
  }
}
