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

interface DashboardStats {
  goalsStats: GoalsStats[];
  chartData: ChartData;
  columnChartData: ChartData;
}

type ChartData = (string | number)[][];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats$: Observable<DashboardStats> = new Observable<DashboardStats>();
  isLoading: boolean = true;

  goalsByCategoryPieChart = {
    chartType: ChartType.PieChart,
    chartHeight: 300,
  };

  goalsByMonthChart = {
    chartType: ChartType.ColumnChart,
    // chartHeight: 300,
  };

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {
    const userId = window.Clerk?.user?.id as string;
    this.stats$ = combineLatest([this.goalsService.getGoals(userId)]).pipe(
      map(([goalsRes]): DashboardStats => {
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
        const groupedResult: CategoryStats = groupBy(goalsRes, 'category_name');

        const chartData: ChartData = [];

        for (const [key, value] of Object.entries(groupedResult)) {
          chartData.push([key, value.length]);
        }

        const groupedByMonth = groupBy(goalsRes, (item) => {
          return item.target.toString().substring(0, 7);
        });
        const columnChartData: ChartData = this.months.map((month) => [
          month,
          0,
        ]);
        for (const [key, value] of Object.entries(groupedByMonth)) {
          const monthNo = key.split('-').pop() ?? '';
          const monthName = this.months[+monthNo];
          columnChartData[+monthNo] = [monthName, value.length];
        }

        return { goalsStats, chartData, columnChartData };
      }),
      tap(() => (this.isLoading = false))
    );
  }

  getDataByStatus(res: Goal[], status: string) {
    return res?.filter((item) => item.status === status);
  }
}
