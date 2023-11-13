import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    });
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    component.increment();
    component.decrement();
    expect(component.value).toBe(0);
  })

  it('should no increment below the maximum value', () => {
    for(let i = 0; i < 110; i++) {
      component.increment();
    }
    expect(component.value).toBe(100);
  })

});
