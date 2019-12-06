import { 
  Directive, 
  ElementRef,
  HostListener  
} from '@angular/core';

// We can't declare a template inside a directive
@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {
  // The host is the element that we have bound the directive to
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    // [1234, 5678, 1245, 1234]
    let numbers = [];

    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');
  }

}