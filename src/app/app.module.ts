import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { HomeComponent } from './home.component';
import { 
  ProjectDetailComponent,
  ProjectListComponent,
  ProjectSliderComponent
 } from "./projects/index";
import { NavBarComponent } from './nav/nav-bar.component';
import { route } from './routes';
import { ProfileComponent } from './profile/profile.component';
import { IntroPageComponent } from './intro.component';
import { SideNavComponent } from './nav/sidebar.component';
import { ContactComponent } from './contact.component';
import { WindowRef } from './services/windowRef';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    NavBarComponent,
    ProfileComponent,
    IntroPageComponent,
    SideNavComponent,
    ContactComponent,
    ProjectSliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route, {anchorScrolling: 'enabled'})
  ],
  providers: [
    WindowRef
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
