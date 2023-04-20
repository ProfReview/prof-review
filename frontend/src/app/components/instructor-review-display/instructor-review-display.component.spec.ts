import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorReviewDisplayComponent } from './instructor-review-display.component';

describe('InstructorReviewDisplayComponent', () => {
  let component: InstructorReviewDisplayComponent;
  let fixture: ComponentFixture<InstructorReviewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorReviewDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorReviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
