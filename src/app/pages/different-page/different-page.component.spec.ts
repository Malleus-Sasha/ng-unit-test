import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentPageComponent } from './different-page.component';

describe('DifferentPageComponent', () => {
  let component: DifferentPageComponent;
  let fixture: ComponentFixture<DifferentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferentPageComponent]
    });
    fixture = TestBed.createComponent(DifferentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
