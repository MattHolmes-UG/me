import { HomeComponent } from './home.component';
import { ProjectDetailComponent } from './projects';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const route: Routes = [
  // {path: '', redirectTo: '/projects', pathMatch: 'full'},
  { path: 'projects', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '#about', component: ProfileComponent },
]