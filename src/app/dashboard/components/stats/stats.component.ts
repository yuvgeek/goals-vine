import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
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
