import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivityInView } from '../interfaces/activity';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  constructor(private activitiesService: ActivitiesService) {}
  dotSize: number = 20;
  activities$: Observable<ActivityInView[]> = new Observable<
    ActivityInView[]
  >();
  name: string = '';
  isLoading: boolean = true;
  ngOnInit(): void {
    const userId = window.Clerk.user?.id as string;
    this.name = window.Clerk.user?.fullName as string;
    this.activities$ = this.activitiesService.getActivities(userId).pipe(
      tap(() => {
        this.isLoading = false;
      })
    );
  }

  onHeaderClick(event: any) {
    event.stopPropagation();
  }

  onDotClick(event: any) {
    event.stopPropagation();
  }
}
