import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import type { Clerk as ClerkBase } from '@clerk/types';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { GoalUpdateComponent } from './dashboard/components/goal-update/goal-update.component';
import { GoalsComponent } from './dashboard/components/goals/goals.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { SnakeCaseModule } from './pipes/snake-case/snake-case.module';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProfileComponent } from './profile/profile.component';
import { TitleCasePipe } from '@angular/common';

type Clerk = ClerkBase & {
  load: (opts: { navigate: (to: string) => Promise<unknown> }) => Promise<void>;
};
declare global {
  interface Window {
    Clerk: Clerk;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AccountComponent,
    GoalsComponent,
    GoalUpdateComponent,
    DashboardComponent,
    CategoriesComponent,
    UpdateCategoryComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialSharedModule,
    SnakeCaseModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: Window, useValue: window }, TitleCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
