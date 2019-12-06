import { 
  Directive, 
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

// We can't declare a template inside a directive
@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {
  @HostBinding('style.border')
  border: string;

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

    this.border = '';

    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }

}