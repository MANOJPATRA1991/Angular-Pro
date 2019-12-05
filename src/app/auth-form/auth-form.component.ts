import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngAfterContentInit() {
    if (this.remember) {
      // console.log(this.remember);
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      })
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}