import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements AfterViewInit {
  @ViewChild('profileContainer', { static: false }) private profileContainer:
    | ElementRef<HTMLDivElement>
    | undefined;

  ngAfterViewInit(): void {
    const el = this.profileContainer?.nativeElement;
    if (!el) {
      return;
    }
    window.Clerk.mountUserProfile(el);
  }
}
