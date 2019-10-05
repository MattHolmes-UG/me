import { Component, OnInit, ContentChild, ElementRef, ContentChildren } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
  <side-nav #sidemenu></side-nav>
  <intro></intro>
  <nav-bar #nav></nav-bar>
  <profile></profile>
  <project-list></project-list>
  <contact></contact>
  `
})
export class HomeComponent{
  
}
