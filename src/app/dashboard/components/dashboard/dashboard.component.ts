import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.stats = [
      {
        label: 'Not Started',
      },
      {
        label: 'In Progress',
      },
      {
        label: 'Completed',
      },
    ];
  }
}
