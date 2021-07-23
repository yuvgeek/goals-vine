import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import type { UserResource } from '@clerk/types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() appName: string = '';
  constructor(
    private router: Router,
    public userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(
      this.userService.userInfoObs$.subscribe((val) => console.log(val))
    );
  }
  navigateToHome() {
    this.router.navigate(['']);
  }

  logout() {
    window.Clerk.signOut();
    this.userService.userInfo$.next(null);
    this._snackBar.open('You have been signed out', undefined, {
      duration: 2000,
      horizontalPosition: 'end',
    });
  }
}
