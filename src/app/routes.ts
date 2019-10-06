import { HomeComponent } from './home.component';
import { ProjectDetailComponent } from './projects';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const route: Routes = [
  // {path: '', redirectTo: '/projects', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'projects', redirectTo: '/#projects', pathMatch: 'full' },
  { path: 'aboutme', redirectTo: '/#about', pathMatch: 'full' },
  { path: 'contactme', redirectTo: '/#contact', pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'project', component: ProjectDetailComponent },
]