import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockCounterComponent } from './stock-counter.component';
// Comment onModelChange and onTouch during testing

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockCounterComponent
      ]
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;

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
});