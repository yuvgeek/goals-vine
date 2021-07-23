import {
  AfterViewInit,
  Component,
  ElementRef, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements AfterViewInit {
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
