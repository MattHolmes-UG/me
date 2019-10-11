import { HomeComponent } from './home.component';
import { ProjectDetailComponent } from './projects';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const route: Routes = [
  // {path: '', redirectTo: '/projects', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'projects', redirectTo: '', pathMatch: 'full' },
  // { path: 'about', redirectTo: '#about', pathMatch: 'full' },
  // { path: 'contact', redirectTo: '/#contact', pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'project', component: ProjectDetailComponent },
]