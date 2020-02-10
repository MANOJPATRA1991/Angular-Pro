import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Product, Item } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';

import { StockValidators } from './stock-inventory.validators';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  products: Product[];

  total: number;

  productMap: Map<number, Product>;
  
  form = this.fb.group({
    // FormGroup is to nicely wrap FormControls
    store: this.fb.group({
      branch: [
        '',
        [Validators.required, StockValidators.checkBranch],
        this.validateBranch.bind(this)
      ],
      // FormControl allows user to interact with it
      code: ['', Validators.required]
    }),
    selector: this.createStock({}),
    // array of FormControls or FormGroups
    stock: this.fb.array([])
  }, {
    validators: StockValidators.checkStockExists
  });

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) { }

  ngOnInit() {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    forkJoin(cart, products)
    .subscribe(([cart, products]: [Item[], Product[]]) => {
      const myMap = products
        .map<[number, Product]>(product => [product.id, product]);

      this.productMap = new Map<number, Product>(myMap);
      this.products = products;

      cart.forEach(item => this.addStock(item));

      this.form.get('stock')
        .valueChanges.subscribe(value => this.calculateTotal(value));

    });
  }

  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => 
      prev + next.quantity * this.productMap.get(next.product_id).price, 0);
    this.total = total;
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

  validateBranch(control: AbstractControl): Observable<any> {
    return this.stockService
      .checkBranchId(control.value)
      .pipe(
        map((response: any) => 
          !!response.length ? null : { unknownBranch: true }
        ),
        catchError((error: any) => throwError(error))
      );
  }
}