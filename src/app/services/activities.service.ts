import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity } from '../interfaces/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor(private http: HttpClient) {}

  addActivity(postBody: Activity): Observable<any> {
    return this.http.post('.netlify/functions/activity', postBody);
  }

  getActivities(user_id: string): Observable<any> {
    return this.http
      .get('.netlify/functions/list-activities', { params: { user_id } })
      .pipe(map((res: any) => res.data));
  }
}
