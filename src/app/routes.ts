import { HomeComponent } from './home.component';
import { ProjectDetailComponent } from './projects';
import { Routes } from '@angular/router';

export const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', redirectTo: '', pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectDetailComponent },
]