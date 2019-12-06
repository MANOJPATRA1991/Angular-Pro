import { 
  Component, 
  Renderer,
  ChangeDetectorRef, 
  Output, 
  ViewChild, 
  ViewChildren, 
  AfterViewInit, 
  EventEmitter, 
  ContentChildren, 
  QueryList, 
  AfterContentInit,
  ElementRef
} from '@angular/core';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  title: string = 'Login';

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}