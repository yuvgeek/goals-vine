import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('logInContainer', { static: false }) private logInContainer:
    | ElementRef<HTMLDivElement>
    | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const el = this.logInContainer?.nativeElement;
    if (!el) {
      return;
    }
    const Clerk = (window as any).Clerk;
    if (!Clerk.user) {
      Clerk.mountSignIn(el);
      return;
    }
    Clerk.unmountSignIn(el);
  }
}
