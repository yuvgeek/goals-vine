import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AddIdea, Idea } from '../interfaces/ideas';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  constructor(private http: HttpClient) {}

  addIdea(idea: AddIdea): Observable<any> {
    return this.http.post('.netlify/functions/add-idea', idea);
  }

  getIdeas(): Observable<Idea[]> {
    return this.http.get('.netlify/functions/list-ideas').pipe(
      map((res: any) => res.data),
      take(1)
    );
  }
}
