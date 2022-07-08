import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayColorComponent } from './array-color.component';

describe('ArrayColorComponent', () => {
  let component: ArrayColorComponent;
  let fixture: ComponentFixture<ArrayColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
