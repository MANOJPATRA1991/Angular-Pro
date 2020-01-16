import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [StockInventoryComponent],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule { }