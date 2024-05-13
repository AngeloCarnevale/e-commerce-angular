import { Injectable } from '@angular/core';
import { StateCreator, ZustandBaseService } from 'ngx-zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand';

interface CartStore {
  cartList: any[];
  addProductToCart: (product: any) => void;
  removeItem: (index: string | number) => void;
  clearCart: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class CartService extends ZustandBaseService<CartStore> {
  initStore(): StateCreator<CartStore> {
    return (set) => ({
      cartList: [],
      addProductToCart: (product: any) =>
        set((state) => ({ cartList: [...state.cartList, product] })),
      removeItem: (index) =>
        set((state) => ({
          cartList: state.cartList.filter((_, i) => i !== index),
        })),
      clearCart: () => set({ cartList: [] }),
    });
  }

  override createStore() {
    return createStore(
      persist<CartStore>(this.initStore(), {
        name: 'counterStore',
        storage: createJSONStorage(() => sessionStorage),
      })
    );
  }
}
