import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import type { UserResource } from '@clerk/types';
import { fromEvent, Observable } from 'rxjs';
import { concatMap, take, tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ClerkResolver implements Resolve<boolean> {
  constructor(private userService: UserService) {}

  resolve(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot
  ): Observable<any> {
    const script = this.loadClerkJS();
    return fromEvent(script, 'load').pipe(
      take(1),
      concatMap(() => (window as any).Clerk.load()),
      tap(() => this.userService.userInfo$.next(window.Clerk.user))
    );
  }

  loadClerkJS() {
    const script = document.createElement('script');
    const frontendApi = 'clerk.z5t2x.3bv02.lcl.dev';
    script.setAttribute('data-clerk-frontend-api', frontendApi);
    script.src = `https://${frontendApi}/npm/@clerk/clerk-js@1/dist/clerk.browser.js`;
    script.async = true;
    document.body.appendChild(script);
    return script;
  }
}
