import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LeaderBoardService } from '../services/leader-board.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['position', 'full_name', 'total'];

  constructor(private leaderBoardService: LeaderBoardService) {}

  leaderBoard$ = new Observable<any>();
  ngOnInit(): void {
    this.leaderBoard$ = this.leaderBoardService
      .getLeaderBoard()
      .pipe(tap(() => (this.isLoading = false)));
  }
}
