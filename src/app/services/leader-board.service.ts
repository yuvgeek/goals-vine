import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeaderBoardService {
  constructor(private http: HttpClient) {}

  getLeaderBoard(): Observable<any> {
    return this.http
      .get('.netlify/functions/leader-board')
      .pipe(map((res: any) => res.data));
  }
}
