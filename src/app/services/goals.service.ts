import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Goal, AddGoal } from '../interfaces/goals';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  public refreshGoals$ = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) {}

  addGoal(goal: AddGoal): Observable<any> {
    return this.http
      .post('.netlify/functions/add-goal', goal)
      .pipe(tap(() => this.refreshGoals$.next(true)));
  }

  getGoals(user_id: string): Observable<Goal[]> {
    return this.http
      .get('.netlify/functions/list-goals', { params: { user_id } })
      .pipe(map((res: any) => res.data));
  }
}
