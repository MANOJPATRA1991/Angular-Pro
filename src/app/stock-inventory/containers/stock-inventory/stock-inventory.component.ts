import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    { id: 1, price: 2800, name: 'Macbook Pro' },
    { id: 2, price: 50, name: 'USB-C Adapter' },
    { id: 3, price: 400, name: 'iPod' },
    { id: 4, price: 900, name: 'iPhone' },
    { id: 5, price: 600, name: 'Apple Watch' }
  ];
  
  form = new FormGroup({
    // FormGroup is to nicely wrap FormControls
    store: new FormGroup({
      branch: new FormControl(''),
      // FormControl allows user to interact with it
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    // array of FormControls or FormGroups
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 })
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submit:", this.form.value);
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }
}