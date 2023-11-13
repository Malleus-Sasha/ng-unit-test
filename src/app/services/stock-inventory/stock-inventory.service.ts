import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Item, Product } from 'src/app/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/cart');
      // .pipe(
      //   catchError(new Error('Handle Error'))
      // );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
      // .catch((error: any) => throwError(error.json()));
  }
}
