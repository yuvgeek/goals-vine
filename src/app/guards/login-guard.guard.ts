import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { mapTo, switchMap, tap } from 'rxjs/operators';
import { ClerkResolver } from '../resolver/clerk.resolver';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  constructor(public clerkResolver: ClerkResolver, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url = route.routeConfig?.path ?? '';

    return of(true).pipe(
      switchMap(() =>
        window.Clerk?.user ? of(true) : this.clerkResolver.resolve()
      ),
      tap(() => {
        if (window?.Clerk?.user) {
          this.router.navigate(['dashboard']);
        }
      }),
      mapTo(true)
    );
  }
}
