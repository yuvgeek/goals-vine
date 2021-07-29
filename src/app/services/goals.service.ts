import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { ClerkAPIInsertResponse } from '../interfaces/api-response';
import { Goal, AddGoal } from '../interfaces/goals';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  public refreshGoals$ = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) {}

  addGoal(goal: AddGoal): Observable<ClerkAPIInsertResponse> {
    return this.http.post('.netlify/functions/add-goal', goal).pipe(
      tap((res: any) => {
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
}
