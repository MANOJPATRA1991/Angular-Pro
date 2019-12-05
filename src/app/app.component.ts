import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log("Create user:", user);
  }

  loginUser(user: User) {
    console.log("Login:", user, this.rememberMe);
  }
}
