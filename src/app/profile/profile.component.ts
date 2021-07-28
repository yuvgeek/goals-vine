import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import type { UserResource } from '@clerk/types';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userInfo$ = new Observable<UserResource | null | undefined>();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo$ = this.userService.userInfo$.pipe(filter((data) => !!data));
  }
}
