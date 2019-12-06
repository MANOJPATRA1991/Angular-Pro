import { 
  Component, 
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  AfterContentInit  
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterContentInit() {
    // Creates a factory for our AuthFormComponent
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    // Access public properties of the component
    this.component.instance.title = "Create account";
    // Access output of a dynamic component
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log("Login:", user);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
}
