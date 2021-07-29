import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  ClerkAPIDeleteResponse,
  ClerkAPIUpsertResponse,
} from '../interfaces/api-response';
import { AddGoal, Goal } from '../interfaces/goals';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  public refreshGoals$ = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) {}

  saveGoal(goal: AddGoal): Observable<ClerkAPIUpsertResponse> {
    return this.http
      .post<ClerkAPIUpsertResponse>('.netlify/functions/add-goal', goal)
      .pipe(
        tap(() => {
          this.refreshGoals$.next(true);
        })
      );
  }

  getGoals(user_id: string): Observable<Goal[]> {
    return this.http
      .get('.netlify/functions/list-goals', { params: { user_id } })
      .pipe(map((res: any) => res.data));
  }

  updateGoalStatus(user_id: string, goal_id: string, status: string) {
    return this.http.post('.netlify/functions/update-goal-status', {
      user_id,
      id: goal_id,
      status,
    });
  }

  deleteGoal(user_id: string, id: string): Observable<ClerkAPIDeleteResponse> {
    return this.http
      .post<ClerkAPIDeleteResponse>('.netlify/functions/delete-goal', {
        user_id,
        id,
      })
      .pipe(
        tap(() => {
          this.refreshGoals$.next(true);
        })
      );
  }
}
