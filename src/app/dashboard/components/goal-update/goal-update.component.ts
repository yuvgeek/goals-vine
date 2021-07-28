import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Observable } from 'rxjs';
import { AddGoal, Goal } from 'src/app/interfaces/goals';
import { CategoriesService } from 'src/app/services/categories.service';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goal-update',
  templateUrl: './goal-update.component.html',
  styleUrls: ['./goal-update.component.scss'],
})
export class GoalUpdateComponent implements OnInit {
  public Editor = ClassicEditor;
  public statusOptions = [
    {
      label: 'Not Started',
      value: 'not_started',
    },
    {
      label: 'In Progress',
      value: 'in_progress',
    },
    {
      label: 'Completed',
      value: 'completed',
    },
  ];

  public visibilityOptions = [
    {
      label: 'Public',
      value: 'public',
    },
    {
      label: 'Private',
      value: 'private',
    },
    {
      label: 'Friends',
      value: 'friends',
    },
  ];

  categories$ = new Observable<
    {
      name: string;
      user_id: string;
      id: string;
    }[]
  >();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'add' | 'update' },
    private fb: FormBuilder,
    private goalsService: GoalsService,
    private categoryService: CategoriesService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories(
      window.Clerk.user?.id as string
    );
  }

  goalForm = this.fb.group({
    name: [null, Validators.required],
    category_id: [null, Validators.required],
    status: ['not_started', Validators.required],
    target: [null, Validators.required],
    visibility: ['public', Validators.required],
  });

  createGoal() {
    const formValues = this.goalForm.value as Goal;
    this.goalsService
      .addGoal({ ...formValues, user_id: window.Clerk.user?.id as string })
      .subscribe((res) => {
        this._snackBar.open('Goal created!', undefined, {
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          duration: 3000,
        });
      });
  }
}
