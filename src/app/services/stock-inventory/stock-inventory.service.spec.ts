import { TestBed } from '@angular/core/testing';

import { StockInventoryService } from './stock-inventory.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

function createResponse(body: any[]) {
  return of(body);
}

class MockHttp {
  get() {
    console.log('MockHttp GET ->');
    return createResponse([]);
  }
}

const cartItems = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 5 }];
const productItems = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 100, name: 'Another Test' }];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttp }
      ]
    });
    service = TestBed.inject(StockInventoryService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get cart items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));

    service.getCartItems().subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    })
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...productItems]));

    service.getProducts()
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(productItems);
      });
  });

});
