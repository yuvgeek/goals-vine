import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { SnakeCaseModule } from '../pipes/snake-case/snake-case.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    // DashboardComponent,
    // StatsComponent,
    // GoalUpdateComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialSharedModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    SnakeCaseModule,
  ],
})
export class DashboardModule {}
