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
    { label: 'Feed', route: 'feed', icon: 'feed' },
    { label: 'Categories', route: '/categories', icon: 'category' },
  ];

  isLoading: boolean = true;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.userInfoObs$.pipe().subscribe(() => {
      this.isLoading = false;
    });
  }
}
