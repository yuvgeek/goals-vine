import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public refreshCategories$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  getCategories(user_id: string) {
    return this.http
      .get('.netlify/functions/list-categories', { params: { user_id } })
      .pipe(map((res: any) => res.data));
  }

  updateCategory(
    name: string,
    user_id: string,
    id: string | undefined
  ): Observable<any> {
    return this.http
      .post('.netlify/functions/update-category', { name, user_id, id })
      .pipe(tap(() => this.refreshCategories$.next(true)));
  }
}
