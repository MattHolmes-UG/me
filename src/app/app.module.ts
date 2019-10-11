import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";

import { HomeComponent } from './home.component';
import { 
  ProjectDetailComponent,
  ProjectListComponent,
  ProjectSliderComponent,
 } from "./projects/index";
import { NavBarComponent } from './nav/nav-bar.component';
import { route } from './routes';
import { ProfileComponent } from './profile/profile.component';
import { IntroPageComponent } from './intro.component';
import { SideNavComponent } from './nav/sidebar.component';
import { ContactComponent } from './contact.component';
import { ProjectService } from './services/projects.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
    RouterModule.forRoot(route, {anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      // scrollPositionRestoration: "enabled"
    }),
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
