import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appName: string = '';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['']);
  }

  logout() {}
}
