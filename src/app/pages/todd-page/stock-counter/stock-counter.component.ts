import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Some<T> {
  [key: string]: T;
}

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent {
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() changed = new EventEmitter<number>();

  value: number = 0;
  focused: boolean | undefined;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.changed.emit(this.value);
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.changed.emit(this.value);
    }
  }

  onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onKeyUp(event: KeyboardEvent) {
    let handlers: Some<()=> void> = {
      'ArrowDown': () => this.decrement(),
      'ArrowUp': () => this.increment()
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
