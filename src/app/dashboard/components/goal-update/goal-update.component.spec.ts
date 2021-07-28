import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUpdateComponent } from './goal-update.component';

describe('GoalUpdateComponent', () => {
  let component: GoalUpdateComponent;
  let fixture: ComponentFixture<GoalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
