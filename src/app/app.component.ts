import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  createUser(user: User) {
    console.log("Create user:", user);
  }

  loginUser(user: User) {
    console.log("Login:", user);
  }
}
