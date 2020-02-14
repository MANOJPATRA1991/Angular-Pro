import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockCounterComponent } from './stock-counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
// Comment onModelChange and onTouch during testing

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockCounterComponent
      ]
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.value = 0;
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(10);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(10);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it('should not decrement below minimum value', () => {
    component.increment();
    expect(component.value).toBe(10);
    component.decrement();
    expect(component.value).toBe(10);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it('should not increment above maximum value', () => {
    for (let i = 0; i < 2000; i++) {
      component.increment();
    }
    expect(component.value).toBe(1000);
  });

  it('should call the output on a value change', () => {
    spyOn(component.changed, "emit").and.callThrough();
    component.step = 1000;
    component.increment();
    expect(component.changed.emit).toHaveBeenCalledWith(1000);
  });

  it('should increment when the + button is clicked', () => {
    el.query(By.css('button:first-child')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(10);
    expect(el.query(By.css('p')).nativeElement.textContent.trim()).toBe('10');
  });

  it('should increment the value when the up arrow is pressed', () => {
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp';
    el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
    fixture.detectChanges();
    expect(component.value).toBe(0);
  });
});