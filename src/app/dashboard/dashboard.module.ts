import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StatsComponent } from './components/stats/stats.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DashboardComponent, StatsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
})
export class DashboardModule {}
