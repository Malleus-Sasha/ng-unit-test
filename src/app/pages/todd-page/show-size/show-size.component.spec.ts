import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSizeComponent } from './show-size.component';
import { FileSizePipe } from 'src/app/pipes/file-size/file-size.pipe';

describe('ShowSizeComponent', () => {
  let component: ShowSizeComponent;
  let fixture: ComponentFixture<ShowSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowSizeComponent,
        FileSizePipe,
      ]
    });
    fixture = TestBed.createComponent(ShowSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
