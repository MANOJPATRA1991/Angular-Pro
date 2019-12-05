import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}