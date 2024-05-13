import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FreteService {
  constructor(private http: HttpClient) {}

  calculateFrete(cepOrigem: string, cepDestino: string, peso: number) {

    const token = 'SEU_TOKEN_DE_API';
    
    const body = {
      from: cepOrigem,
      to: cepDestino,
      weight: peso,
    };
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.post(
      'https://api.melhorenvio.com.br/v2/me/shipment/calculate', body, {
        headers
      }
    );
  }
}
