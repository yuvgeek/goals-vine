import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @Input() appName: string = '';
  @ViewChild('userAction', { static: false }) private userActionContainer:
    | ElementRef<HTMLDivElement>
    | undefined;

  constructor(
    private router: Router,
    public userService: UserService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.userService.userInfoObs$
      .pipe(filter((res) => !!res))
      .subscribe((res) => {
        const el = this.userActionContainer?.nativeElement as HTMLDivElement;
        window.Clerk.mountUserButton(el);
      });
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  logout() {
    window.Clerk.signOut().then(() => {
      this.userService.userInfo$.next(null);
      this._snackBar.open('You have been signed out', undefined, {
        duration: 2000,
        horizontalPosition: 'end',
      });
      this.router.navigate(['']);
    });
  }
}
