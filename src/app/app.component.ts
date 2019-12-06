import { 
  Component, 
  ViewChild,
  ViewContainerRef,
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
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterContentInit() {
    // Creates a factory for our AuthFormComponent
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log("Login:", user);
  }
}
