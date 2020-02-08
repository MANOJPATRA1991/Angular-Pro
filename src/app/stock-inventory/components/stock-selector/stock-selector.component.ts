import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

  @Output()
  added = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.added.emit(this.parent.get('selector').value);
    // needs all keys
    this.parent.get('selector').reset({
      product_id: '',
      quantity: 10
    });

    // FOLLOWING DON'T RESET THE FORM //
    
    // needs all keys
    // this.parent.get('selector').setValue({
    //   product_id: '',
    //   quantity: 10
    // });
    
    // this.parent.get('selector').patchValue({
    //   product_id: ''
    // });
  }

  get stockExists() {
    return (
      this.parent.hasError('stockExists') &&
      this.parent.get('selector.product_id').dirty
    );
  }

  get notSelected() {
    return (
      !this.parent.get('selector.product_id').value
    );
  }

}