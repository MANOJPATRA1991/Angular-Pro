import { StockInventoryService } from './stock-inventory.service';
import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { Response, ResponseOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

function createResponse(body: any) {
  return of(body);
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [
	{
		product_id: 1,
		quantity: 10,
	},
	{
		product_id: 2,
		quantity: 5,
	},
];

const productItems = [
	{
		product_id: 1,
    price: 10,
    name: 'Test'
	},
	{
		product_id: 2,
    price: 100,
    name: 'Another test'
	},
];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        { provide: HttpClient, useClass: MockHttp }
      ]
    });

    http = bed.get(HttpClient);
    service = bed.get(StockInventoryService);
  });

  // it('should get the cart items', () => {
  //   spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));
  //   service.getCartItems()
  //     .subscribe((result) => {
  //       const body = result;
  //       expect(body.length).toBe(2);
  //       expect(body).toEqual(cartItems);
  //     });
  // });
  
  // it('should get the product items', () => {
  //   spyOn(http, 'get').and.returnValue(createResponse([...productItems]));
  //   service.getProducts()
  //     .subscribe((result) => {
  //       const body = result;
  //       expect(body.length).toBe(2);
  //       expect(body).toEqual(productItems);
  //     });
  // });
});