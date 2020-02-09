import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MyForDirective } from './my-for/my-for.directive';
import { FileSizePipe } from './file-size/file-size.pipe';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { MailModule } from './mail/mail.module';

export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AuthFormModule,
    StockInventoryModule,
    MailModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ 
    AppComponent, 
    CreditCardDirective, 
    TooltipDirective, 
    MyForDirective, 
    FileSizePipe 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
