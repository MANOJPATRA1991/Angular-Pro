import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MyForDirective } from './my-for/my-for.directive';
import { FileSizePipe } from './file-size/file-size.pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AuthFormModule 
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
