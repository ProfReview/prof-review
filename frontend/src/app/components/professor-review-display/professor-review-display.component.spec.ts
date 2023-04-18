import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorReviewDisplayComponent } from './professor-review-display.component';

describe('ProfessorReviewDisplayComponent', () => {
  let component: ProfessorReviewDisplayComponent;
  let fixture: ComponentFixture<ProfessorReviewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorReviewDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorReviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
