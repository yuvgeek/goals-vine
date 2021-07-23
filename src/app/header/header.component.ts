import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import type { UserResource } from '@clerk/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() appName: string = '';
  constructor(private router: Router, public userService: UserService) {}

  ngOnInit(): void {
    console.log(this.userService.userInfoObs$.subscribe(val => console.log(val)));
    
  }
  navigateToHome() {
    this.router.navigate(['']);
  }

  logout() {
    window.Clerk.signOut();
    this.userService.userInfo$.next(null);
  }
}
