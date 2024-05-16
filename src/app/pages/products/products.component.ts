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
import { FilterService } from '../../services/filter.service';

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
  title: Title = inject(Title);
  totalProducts = 0;
  pageSize = 20;
  currentPage = 1;
  offset = 1;
  filters!: any[];
  checked: string = '';

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (!params['search']) {
        this.router.navigate(['/']);
      }
      const searchParam = params['search'];
      this.title.setTitle(`${searchParam} | Eccomerce 📦️`);
      console.log(searchParam);

      this.searchProducts();
      this.filterService.isChecked$.subscribe((checked) => {
        checked !== '' &&
          this.service
            .getProductsByBrand(searchParam, checked)
            .subscribe((response: any) => {
              this.products = response.results;
            });
      });
    });
  }

  searchProducts(): void {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      this.service
        .getProducts(params['search'], this.offset)
        .subscribe((data: any) => {
          this.totalProducts = data.paging.total;
          this.products = data.results;
          this.loading = false;
          this.filters = data.available_filters;
          console.log(data);
        });
    });
  }

  nextPage(): void {
    this.offset += 1;
    this.searchProducts();
  }

  previousPage(): void {
    this.offset -= 1;
    this.searchProducts();
  }
}
