import { 
  Component, 
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  AfterContentInit,
  TemplateRef
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterContentInit {
  ctx = {
    $implicit: 'Manoj',
    location: 'India'
  };

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterContentInit() {
  }

  loginUser(user: User) {
    console.log("Login:", user);
  }
}
