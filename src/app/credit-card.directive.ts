import { 
  Directive, 
  ElementRef  
} from '@angular/core';

// We can't declare a template inside a directive
@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    // For talking to the DOM node via the directive
    private element: ElementRef
  ) { 
    console.log(this.element);
  }

}