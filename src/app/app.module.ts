import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AuthFormModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
