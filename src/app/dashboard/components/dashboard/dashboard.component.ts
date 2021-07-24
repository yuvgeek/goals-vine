import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sideNavItems = [
    { label: 'Home', route: '/dashboardh', icon: 'home' },
    { label: 'Ideas', route: 'ideas', icon: 'lightbulb' },
    { label: 'Feed', route: 'feed', icon: 'feed' },
  ];
}
