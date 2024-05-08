import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { UpscalePipe } from '../../pipes/upscale.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [BreadcrumbComponent, HlmButtonModule, UpscalePipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductService],
})
export class ProductDetailComponent implements OnInit {
  idProduct: string | null = '';
  product!: any;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    this.loadProductDetails()
  }

  loadProductDetails() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.idProduct = productId;
    this.service.getProduct(productId).subscribe((data) => {
      this.product = data
      console.log(data)
    });
  }
}
