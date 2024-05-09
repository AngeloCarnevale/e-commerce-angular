import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { UpscalePipe } from '../../pipes/upscale.pipe';
import { CommonModule } from '@angular/common';
import { BreadcrumbProductDetailComponent } from './_components/breadcrumb/breadcrumb-product-detail.component';
import { lucideCar, lucideStore, lucideBadgeCheck } from '@ng-icons/lucide';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    HlmButtonModule,
    UpscalePipe,
    HlmIconComponent,
    CommonModule,
    BreadcrumbProductDetailComponent,
  ],
  templateUrl: './product-detail.component.html',
  providers: [
    ProductService,
    [provideIcons({ lucideCar, lucideStore, lucideBadgeCheck })],
  ],
})
export class ProductDetailComponent implements OnInit {
  idProduct: string | null = '';
  product!: any;
  product_name!: string;
  description!: any;
  showCompleteText: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    this.loadProductDetails();
    this.loadDescription();
  }

  loadProductDetails(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.idProduct = productId;

    this.service.getProduct(productId).subscribe((data) => {
      this.product = data;
      this.product_name = this.product.title;

      console.log(data);
    });
  }

  loadDescription(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    this.service.getDesc(productId).subscribe((data: any) => {
      this.description = data;
      console.log(this.description);
    });
  }
}
