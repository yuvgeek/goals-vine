import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName = environment.appName;

  sideNavItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Goals', route: 'goals', icon: 'flag' },
    { label: 'Feed', route: 'feed', icon: 'feed' },
    { label: 'Categories', route: '/categories', icon: 'category' },
  ];
}
