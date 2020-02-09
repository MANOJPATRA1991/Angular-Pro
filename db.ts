import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemStockService implements InMemoryDbService {
  createDb() {

    return {
      "cart": [
        { "product_id": 1, "quantity": 10 },
        { "product_id": 3, "quantity": 50 }
      ],
      "products": [
        { "id": 1, "price": 2800, "name": "Macbook Pro" },
        { "id": 2, "price": 50, "name": "USB-C Adapter" },
        { "id": 3, "price": 400, "name": "iPod" },
        { "id": 4, "price": 900, "name": "iPhone" },
        { "id": 5, "price": 600, "name": "Apple Watch" }
      ],
      "branches": [
        {"id": "A182"},
        {"id": "B182"},
        {"id": "C182"},
        {"id": "D182"}
      ]
    };
  }
}