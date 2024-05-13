import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucidePlus, lucideX } from '@ng-icons/lucide';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { FreteService } from '../../services/frete.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HlmIconComponent, HlmButtonModule, RouterLink],
  templateUrl: './cart.component.html',
  providers: [provideIcons({ lucidePlus, lucideX })],
})
export class CartComponent implements OnInit {
  cart!: any[];
  subtotal!: number;
  private cartService = inject(CartService);
  store$ = this.cartService.useStore();

  ngOnInit(): void {
    this.loadCart();
    this.calculateSubtotal();
    this.calculateFrete();
  }

  loadCart() {
    this.store$.subscribe((products) => {
      this.cart = products.cartList;
    });
  }

  calculateSubtotal() {
    this.store$.subscribe((state) => {
      this.subtotal = state.getSubtotal();
    });
  }

  calculateTotal(): number {
    return this.subtotal + this.calculateFrete();
  }

  removeProductFromCart(id: number) {
    this.store$.subscribe((state) => {
      state.removeItem(id);
    });
  }

  calculateFrete(): number {
    return 21.45;
  }
}
