import { Injectable } from '@angular/core';
import type { UserResource } from '@clerk/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userInfo$ = new BehaviorSubject<UserResource | null | undefined>(
    undefined
  );
  public userInfoObs$ = this.userInfo$.asObservable();
  constructor() {}
}
