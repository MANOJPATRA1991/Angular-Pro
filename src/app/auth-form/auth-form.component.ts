import { Component, Output, ViewChild, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @ViewChild(AuthMessageComponent)
  message: AuthMessageComponent;

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }

    if (this.remember) {
      // console.log(this.remember);
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      })
    }
  }

  ngAfterViewInit() {
    console.log(this.message);
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}