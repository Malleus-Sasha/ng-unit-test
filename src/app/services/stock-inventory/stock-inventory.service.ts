import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, delay, map, of, throwError } from 'rxjs';
import { Item, Product } from 'src/app/models/product.interface';
import { ItemsMock } from './item.mock';
import { ProductMock } from './product.mock';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  // constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return of([...ItemsMock]).pipe(delay(1000));
    // return this.http.get<Item[]>('/api/cart');
      // .pipe(
      //   catchError(new Error('Handle Error'))
      // );
  }

  getProducts(): Observable<Product[]> {
    return of([...ProductMock]).pipe(delay(1100));
    // return this.http.get<Product[]>('/api/products');
      // .catch((error: any) => throwError(error.json()));
  }
}
