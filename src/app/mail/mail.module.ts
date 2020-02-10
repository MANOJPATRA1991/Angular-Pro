import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailViewGuard } from './components/mail-view/mail-view.guard';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';
import { AuthGuard } from '../auth/auth.guard';
import { AuthModule } from '../auth/auth.module';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivateChild: [ AuthGuard ],
    children: [
      { 
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve
        }
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        canDeactivate: [ MailViewGuard ],
        outlet: 'pane',
        resolve: {
          message: MailViewResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent,
    MailViewComponent
  ],
  exports: [
    MailAppComponent
  ],
  providers: [
    MailService,
    MailFolderResolve,
    MailViewResolve,
    MailViewGuard
  ]
})
export class MailModule { }