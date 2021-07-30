import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName = environment.appName;

  sideNavItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Goals', route: 'goals', icon: 'flag' },
    { label: 'Categories', route: '/categories', icon: 'category' },
    { label: 'Account', route: '/account', icon: 'account_circle' },
    { label: 'Leader board', route: '/leader-board', icon: 'leaderboard' },
    { label: 'Activity', route: 'activity', icon: 'feed' },
    // { label: 'Profile', route: '/profile', icon: 'person' }, - It is now in backlog. To be introduced later release
  ];

  isLoading: boolean = true;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.userInfoObs$.subscribe((user) => {
      this.isLoading = false;
    });
  }
}
