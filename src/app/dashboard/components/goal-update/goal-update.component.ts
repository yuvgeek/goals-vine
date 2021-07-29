import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AddGoal, Goal } from 'src/app/interfaces/goals';
import { ActivitiesService } from 'src/app/services/activities.service';
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
    @Inject(MAT_DIALOG_DATA)
    public data: { action: 'add' | 'update'; selectedGoal: Goal },
    private fb: FormBuilder,
    private goalsService: GoalsService,
    private categoryService: CategoriesService,
    private _snackBar: MatSnackBar,
    private activitiesService: ActivitiesService
  ) {}

  goalForm = this.fb.group({
    name: [null, Validators.required],
    category_id: [null, Validators.required],
    status: ['not_started', Validators.required],
    target: [null, Validators.required],
    visibility: ['public', Validators.required],
  });

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories(
      window.Clerk.user?.id as string
    );

    if (this.data.action === 'update') {
      // bind values to form
      const { name, category_id, status, target, visibility } =
        this.data.selectedGoal;
      this.goalForm.setValue({ name, category_id, status, target, visibility });
    }
  }

  saveGoal() {
    const formValues = this.goalForm.value as Goal;
    const user_id = window.Clerk.user?.id as string;

    const values = { ...formValues, user_id };
    if (this.data.action === 'update') {
      values.id = this.data.selectedGoal.id;
    }
    this.goalsService
      .saveGoal(values)
      .pipe(
        tap(() => {
          this._snackBar.open('Goal saved!', undefined, {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 3000,
          });
        }),
        switchMap((res) =>
          this.activitiesService.addActivity({
            user_id,
            goal_id: res.data.upserted_hashes[0],
            category_id: formValues.category_id,
            action: this.data.action === 'update' ? 'updated' : 'created',
          })
        )
      )
      .subscribe(() => {
        // this.goalsService.refreshGoals$.next(true)
      });
  }

  deleteGoal() {
    const user_id = window.Clerk.user?.id as string;

    this.goalsService
      .deleteGoal(user_id, this.data.selectedGoal.id)
      .pipe(
        tap(() => {
          this._snackBar.open('Goal deleted!', undefined, {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 3000,
          });
        }),
        switchMap((res) =>
          this.activitiesService.addActivity({
            user_id,
            goal_id: res.data.deleted_hashes[0],
            category_id: this.data.selectedGoal.category_id,
            action: 'deleted',
          })
        )
      )
      .subscribe();
  }
}
