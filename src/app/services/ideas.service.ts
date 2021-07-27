import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddIdea } from '../interfaces/ideas';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  constructor(private http: HttpClient) {}

  addIdea(idea: AddIdea): Observable<any> {
    return this.http.post('.netlify/functions/add-idea', idea);
  }
}
