import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { UpscalePipe } from '../../pipes/upscale.pipe';
import { CommonModule } from '@angular/common';
import { BreadcrumbProductDetailComponent } from './_components/breadcrumb/breadcrumb-product-detail.component';
import {
  lucideCar,
  lucideStore,
  lucideBadgeCheck,
  lucideHeart,
} from '@ng-icons/lucide';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    HlmButtonModule,
    UpscalePipe,
    FilterPipe,
    HlmIconComponent,
    CommonModule,
    BreadcrumbProductDetailComponent,
  ],
  templateUrl: './product-detail.component.html',
  providers: [
    ProductService,
    CartService,
    [provideIcons({ lucideCar, lucideStore, lucideBadgeCheck, lucideHeart })],
  ],
})
export class ProductDetailComponent implements OnInit {
  idProduct: string | null = '';
  product: any = {};
  product_name: string = '';
  description: any = '';
  completeText: boolean = false;
  thumbnails: any[] = [];
  categories: any[] = [];
  mainThumbnail: string = '';
  cart!: any[];

  private cartService = inject(CartService);
  state$ = this.cartService.useStore();

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private toastService: ToastrService
  ) {}

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
      this.thumbnails = this.product.pictures.slice(0, 6);
      this.mainThumbnail = this.product.thumbnail;
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

  showCompleteText() {
    this.completeText = !this.completeText;
  }

  changeMainThumbnail(e: any) {
    this.mainThumbnail = e.target.src;
  }

  addProductToCart() {
    try {
      this.state$.subscribe((state) => state.addProductToCart(this.product));
      this.toastService.success('Product added with success');
    } catch (e) {
      this.toastService.error('Error to add product to cart');
    }
  }
}
