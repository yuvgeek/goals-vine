import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(user_id: string) {
    return this.http
      .get('.netlify/functions/list-categories', { params: { user_id } })
      .pipe(map((res: any) => res.data));
  }
}
