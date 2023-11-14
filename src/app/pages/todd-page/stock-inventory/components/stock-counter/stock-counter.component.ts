import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StockCounterComponent),
    multi: true,
  }],
})
export class StockCounterComponent implements ControlValueAccessor {
  @Input() step: number = 1;
  @Input() min: number = 10;
  @Input() max: number = 100;

  value: number = 0;
  focused: boolean;

  private onTouch: Function;
  private onModelChange: Function;

  private onChange(value: number) {
    this.value = value;
    this.onModelChange(value);
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: number) {
    this.value = value || 0;
  }

  increment() {
    if (this.value < this.max) {
      this.onChange(this.value + this.step);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.onChange(this.value - this.step);
    }
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onKeyUp(event: KeyboardEvent) {
    let handlers: any = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onFocus(event: FocusEvent) {
    this.focused = true;
    event.preventDefault();
    event.stopPropagation();
  }
}
