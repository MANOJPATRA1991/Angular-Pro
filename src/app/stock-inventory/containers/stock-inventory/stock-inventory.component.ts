import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
  
  form = this.fb.group({
    // FormGroup is to nicely wrap FormControls
    store: this.fb.group({
      branch: '',
      // FormControl allows user to interact with it
      code: ''
    }),
    selector: this.createStock({}),
    // array of FormControls or FormGroups
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 })
    ])
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submit:", this.form.value);
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    console.log(group, index);
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
}