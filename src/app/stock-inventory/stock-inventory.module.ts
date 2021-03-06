import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockInventoryService } from './services/stock-inventory.service';
import { InMemStockService } from '../../../db';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemStockService),
  ],
  declarations: [
    StockInventoryComponent, 
    StockBranchComponent, 
    StockSelectorComponent, 
    StockProductsComponent, 
    StockCounterComponent
  ],
  exports: [
    StockInventoryComponent
  ],
  providers: [StockInventoryService]
})
export class StockInventoryModule { }