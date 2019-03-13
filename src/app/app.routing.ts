import {Routes} from '@angular/router';
import { AuthGuard } from './_auth.guard';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cards', component: MainComponent, canActivate: [AuthGuard] }
];
