import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysBetweenComponent } from './days-between.component';

describe('DaysBetweenComponent', () => {
  let component: DaysBetweenComponent;
  let fixture: ComponentFixture<DaysBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysBetweenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
