import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sideNavItems = [
    { label: 'Home', route: '' },
    { label: 'Feed', route: 'feed' },
  ];
}
