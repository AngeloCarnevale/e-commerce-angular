import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucidePlus } from '@ng-icons/lucide';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HlmIconComponent],
  templateUrl: './cart.component.html',
  providers: [provideIcons({ lucidePlus })],
})
export class CartComponent implements OnInit {
  cart!: any;
  private cartService = inject(CartService);
  store$ = this.cartService.useStore();

  ngOnInit(): void {
    this.loadCart();
    console.log(this.cart);
  }

  loadCart() {
    this.store$.subscribe((products) => {
      this.cart = products.cartList;
    });
  }
}
