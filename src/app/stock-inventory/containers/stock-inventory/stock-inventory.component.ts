import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  form = new FormGroup({
    // FormGroup is to nicely wrap FormControls
    store: new FormGroup({
      branch: new FormControl(''),
      // FormControl allows user to interact with it
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    // array of FormControls or FormGroups
    stock: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submit:", this.form.value);
  }

}