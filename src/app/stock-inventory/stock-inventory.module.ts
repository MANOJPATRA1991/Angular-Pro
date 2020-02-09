import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockInventoryService } from './services/stock-inventory.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    StockInventoryComponent, 
    StockBranchComponent, 
    StockSelectorComponent, 
    StockProductsComponent
  ],
  exports: [
    StockInventoryComponent
  ],
  providers: [StockInventoryService]
})
export class StockInventoryModule { }