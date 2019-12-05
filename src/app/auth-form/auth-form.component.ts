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
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ViewChild('email')
  email: ElementRef;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @ViewChildren(AuthMessageComponent)
  message: QueryList<AuthMessageComponent>;

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private renderer: Renderer,
    private cd: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    if (this.remember) {
      // console.log(this.remember);
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      })
    }
  }

  ngAfterViewInit() {
    // Platform safe code
    this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.setElementClass(this.email.nativeElement, 'email', true);
    this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}