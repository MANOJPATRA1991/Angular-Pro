import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Route, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MyForDirective } from './my-for/my-for.directive';
import { FileSizePipe } from './file-size/file-size.pipe';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { MailModule } from './mail/mail.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data.preload ? fn() : of(null);
  }
}

export const ROUTES: Routes = [
  // LAZY LOADING DASHBOARD MODULE
  {
    path: 'dashboard',
    // data: { preload: true },
    canLoad: [ AuthGuard ],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    redirectTo: 'mail/folder/inbox'
  }
];

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    AuthFormModule,
    StockInventoryModule,
    MailModule,
    RouterModule.forRoot(ROUTES, {
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: CustomPreload
    })
  ],
  providers: [
    CustomPreload
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
