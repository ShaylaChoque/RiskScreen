import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ProviderTableComponent } from './components/provider-table/provider-table.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'provider-table', component: ProviderTableComponent }
];
