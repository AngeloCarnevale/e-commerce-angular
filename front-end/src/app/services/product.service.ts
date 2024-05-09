import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private con = 'https://api.mercadolibre.com/';

  getProducts(search: string) {
    return this.http.get(this.con + `sites/MLB/search?q=${search}`)
  }

  getDesc(itemId: string | null) {
    return this.http.get(this.con+`items/${itemId}/description`)
  }

  getCategory(categId: string) {
    return this.http.get(this.con+`categories/${categId}`)
  }

  getProduct(id: string | null) {
    return this.http.get(this.con+`items/${id}`)
  }
}
