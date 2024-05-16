import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private con = 'https://api.mercadolibre.com/';
  loading: boolean = false;

  getProducts(search: string, offset: number) {
    return this.http.get(
      this.con + `sites/MLB/search?q=${search}&offset=${offset}&limit=20`
    );
  }

  getDesc(itemId: string | null) {
    return this.http.get(this.con + `items/${itemId}/description`);
  }

  getCategory(categId: string) {
    return this.http.get(this.con + `categories/${categId}`);
  }

  getProduct(id: string | null) {
    return this.http.get(this.con + `items/${id}`);
  }

  getProductsByBrand(param: string, category_id: string) {
    return this.http.get(this.con + `sites/MLB/search?q=${param}?BRAND=${category_id}`);
  }
}
