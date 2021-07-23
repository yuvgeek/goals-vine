import { Injectable } from '@angular/core';
import type { UserResource } from '@clerk/types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userInfo$ = new Subject<UserResource | null>();
  public userInfoObs$ = this.userInfo$.asObservable();
  constructor() {}
}
