import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePipeComponent } from './pre-pipe.component';

describe('PrePipeComponent', () => {
  let component: PrePipeComponent;
  let fixture: ComponentFixture<PrePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
