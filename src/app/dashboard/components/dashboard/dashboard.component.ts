import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { groupBy } from 'lodash';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Categories } from 'src/app/interfaces/categories';
import { Goal } from 'src/app/interfaces/goals';
import { GoalsService } from 'src/app/services/goals.service';

interface GoalsStats {
  key: string;
  value: number;
}

interface CategoryStats {
  [key: string]: Categories[];
}

type ChartData = (string | number)[][];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats$: Observable<{ goalsStats: GoalsStats[]; chartData: ChartData }> =
    new Observable<{
      goalsStats: GoalsStats[];
      chartData: ChartData;
    }>();
  isLoading: boolean = true;

  chartType = ChartType.PieChart;
  chartWidth: number = 600;
  chartHeight: number = 300;

  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {
    const userId = window.Clerk?.user?.id as string;
    this.stats$ = combineLatest([this.goalsService.getGoals(userId)]).pipe(
      map(
        ([goalsRes]): {
          goalsStats: GoalsStats[];
          chartData: ChartData;
        } => {
          const goalsStats: GoalsStats[] = [
            {
              key: 'not_started',
              value: this.getDataByStatus(goalsRes, 'not_started')?.length,
            },
            {
              key: 'in_progress',
              value: this.getDataByStatus(goalsRes, 'in_progress')?.length,
            },
            {
              key: 'completed',
              value: this.getDataByStatus(goalsRes, 'completed')?.length,
            },
          ];
          const groupedResult: CategoryStats = groupBy(
            goalsRes,
            'category_name'
          );

          const chartData: ChartData = [];

          for (const [key, value] of Object.entries(groupedResult)) {
            chartData.push([key, value.length]);
          }

          return { goalsStats, chartData };
        }
      ),
      tap(() => (this.isLoading = false))
    );
  }

  getDataByStatus(res: Goal[], status: string) {
    return res?.filter((item) => item.status === status);
  }
}
