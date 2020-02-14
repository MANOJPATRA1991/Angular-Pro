import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  // forwardRef allows to refer to references which are not yet defined
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    COUNTER_CONTROL_ACCESSOR
  ]
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  private onTouch: Function;
  private onModelChange: Function;

  value: number = 10;

  @Output() changed = new EventEmitter<number>();

  constructor() { }

  

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  ngOnInit() {
  }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      this.changed.emit(this.value);
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.changed.emit(this.value);
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  writeValue(value) {
    this.value = value || 0;
  }

}