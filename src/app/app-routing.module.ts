import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { GoalsComponent } from './dashboard/components/goals/goals.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { ClerkResolver } from './resolver/clerk.resolver';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'goals',
    component: GoalsComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent,
    // resolve: { clerk: ClerkResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'activity',
    component: ActivityComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
