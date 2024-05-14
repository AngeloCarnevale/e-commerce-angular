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
        set((state) => {
          const index = state.cartList.findIndex(
            (item) => item.id === product.id
          );
          if (index !== -1) {
            const cartList = [...state.cartList];
            cartList[index] = {
              ...cartList[index],
              quantity: cartList[index].quantity + 1,
            };
            return { cartList };
          } else {
            return {
              cartList: [...state.cartList, { ...product, quantity: 1 }],
            };
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          cartList: state.cartList.filter((product) => product.id !== id),
        })),
      clearCart: () => set({ cartList: [] }),
      getSubtotal: (): number => {
        return this.getState().cartList.reduce((total, product) => {
          return total + (product.price * product.quantity)
        }, 0);
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
