import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import groupBy from 'lodash/groupBy';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Goal } from 'src/app/interfaces/goals';
import { GoalsService } from 'src/app/services/goals.service';
import { GoalUpdateComponent } from '../goal-update/goal-update.component';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  providers: [TitleCasePipe],
})
export class GoalsComponent implements OnInit {
  constructor(public dialog: MatDialog, public goalsService: GoalsService) {}
  todo = [];
  goals!: { key: string; value: Goal[] }[];
  isLoading: boolean = true;

  ngOnInit() {
    this.goalsService.refreshGoals$
      .pipe(
        switchMap(() =>
          this.goalsService.getGoals(window.Clerk?.user?.id as string)
        )
      )
      .subscribe((res) => {
        this.goals = [
          {
            key: 'not_started',
            value: this.getDataByStatus(res, 'not_started'),
          },
          {
            key: 'in_progress',
            value: this.getDataByStatus(res, 'in_progress'),
          },
          {
            key: 'completed',
            value: this.getDataByStatus(res, 'completed'),
          },
        ];
        this.isLoading = false;
      });
  }

  addGoal(): void {
    const dialogRef = this.dialog.open(GoalUpdateComponent, {
      data: {
        action: 'add',
      },
    });
  }

  drop(event: CdkDragDrop<Goal[]>, status: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.updateGoalStatusOnDrop(
        event.previousIndex,
        event.previousContainer.data,
        status
      );
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  updateGoalStatusOnDrop(prevIndex: number, data: Goal[], status: string) {
    const item = data[prevIndex];
    item.status = status;
    console.log(item);
    this.goalsService
      .updateGoalStatus(window.Clerk.user?.id as string, item.id, status)
      .subscribe();
  }

  getDataByStatus(res: Goal[], status: string) {
    return res?.filter((item) => item.status === status);
  }
}
