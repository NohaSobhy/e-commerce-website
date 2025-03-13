import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private jsonUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map(products => products.find(product => product.id === id))
    );
  }

}
