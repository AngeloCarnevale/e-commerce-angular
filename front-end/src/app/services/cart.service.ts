import { Injectable } from '@angular/core';
import { StateCreator, ZustandBaseService } from 'ngx-zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand';

interface CartStore {
  cartList: any[];
  addProductToCart: (product: any) => void;
  removeItem: (number: string | number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
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
      removeItem: (id) =>
        set((state) => ({
          cartList: state.cartList.filter((product) => product.id !== id),
        })),
      clearCart: () => set({ cartList: [] }),
      getSubtotal: (): number => {
        return this.getState().cartList.reduce(
          (acc, product) => acc + product.price,
          0
        );
      },
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
