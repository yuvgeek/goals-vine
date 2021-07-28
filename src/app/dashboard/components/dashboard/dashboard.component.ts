import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Goal } from 'src/app/interfaces/goals';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats$!: Observable<{ key: string; value: number }[]>;

  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {
    this.stats$ = this.goalsService
      .getGoals(window.Clerk?.user?.id as string)
      .pipe(
        map((res): { key: string; value: number }[] => {
          return [
            {
              key: 'not_started',
              value: this.getDataByStatus(res, 'not_started')?.length,
            },
            {
              key: 'in_progress',
              value: this.getDataByStatus(res, 'in_progress')?.length,
            },
            {
              key: 'completed',
              value: this.getDataByStatus(res, 'completed')?.length,
            },
          ];
        })
      );
  }

  getDataByStatus(res: Goal[], status: string) {
    return res?.filter((item) => item.status === status);
  }
}
