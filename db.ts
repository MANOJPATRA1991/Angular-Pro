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
      ],
      "messages": [
        {
          "id": 1,
          "folder": "inbox",
          "from": "Jane Smith",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from Jane Smith",
          "timestamp": 1487848162905
        },
        {
          "id": 2,
          "folder": "inbox",
          "from": "John Doe",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from John Doe",
          "timestamp": 1487845787719
        },
        {
          "id": 3,
          "folder": "inbox",
          "from": "Joseph Hanes",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from Joseph Hanes",
          "timestamp": 1487845787719
        },
        {
          "id": 4,
          "folder": "trash",
          "from": "Laurence Murray",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from Laurence Murray",
          "timestamp": 1487845787719
        }
      ]
    };
  }
}