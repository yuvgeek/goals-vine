import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaUpdateComponent } from './idea-update.component';

describe('IdeaUpdateComponent', () => {
  let component: IdeaUpdateComponent;
  let fixture: ComponentFixture<IdeaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdeaUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
