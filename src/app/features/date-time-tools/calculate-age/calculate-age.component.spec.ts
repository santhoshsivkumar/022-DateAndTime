import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAgeComponent } from './calculate-age.component';

describe('CalculateAgeComponent', () => {
  let component: CalculateAgeComponent;
  let fixture: ComponentFixture<CalculateAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
