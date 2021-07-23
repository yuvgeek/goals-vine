import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('registerContainer', { static: false }) private registerContainer:
    | ElementRef<HTMLDivElement>
    | undefined;

  ngAfterViewInit(): void {
    const el = this.registerContainer?.nativeElement;
    if (!el) {
      return;
    }
    const Clerk = (window as any).Clerk;
    if (!Clerk.user) {
      Clerk.mountSignUp(el);
      return;
    }
    Clerk.unmountSignUp(el);
  }
}
