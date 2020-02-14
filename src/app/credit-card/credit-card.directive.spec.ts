import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CreditCardDirective } from './credit-card.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <input type="text" [value]="value" appCreditCard>
  `
})
class TestComponent {
  value = 123456;
}

describe('CreditCardDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreditCardDirective,
        TestComponent
      ]
    })
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should format the string with spaces', () => {
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
    directive.value = '475123';
    directive.dispatchEvent(new Event('input'));
    expect(directive.value).toBe('4751 23');
    directive.value = '1234567890234534';
    directive.dispatchEvent(new Event('input'));
    expect(directive.value).toBe('1234 5678 9023 4534');
  });

  it('should have a max length of 16 characters', () => {
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
    directive.value = '123456789023453412345678902345341234567890234534';
    directive.dispatchEvent(new Event('input'));
    expect(directive.value).toBe('1234 5678 9023 4534');
  });
})
