import { Component, ViewChildren, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects.service';

@Component({
  selector: 'side-nav',
  template: `
  <nav class="anti-slant" id="sideMenu" [style.width]="menuOn===true ? '100%' : '0'"
    (click)="toggleMenu()" #nav>
    <ul class="nav flex-column">
      <li class="nav-item" *ngFor="let link of navs">
        <a [routerLink]="['/']" [fragment]=link.href class="nav-link" #links>{{link.title}}</a>
      </li>
    </ul>
  </nav>
  <div class="menuIcon" [class.change]="menuOn===true" (click)="toggleMenu()">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SideNavComponent implements OnInit {
  menuOn: boolean = false;
  @ViewChildren('links') links: any
  navs: any
  private bodyEl: any = document.body
  private navEl: HTMLElement
  constructor(ref: ElementRef, private projectService: ProjectService) {
    this.navEl = ref.nativeElement
  }
  
  ngOnInit() {
    this.navs = this.projectService.getNavLinks();
  }

  toggleMenu() {
    const link = this.links._results
    this.menuOn = !this.menuOn
    if (this.menuOn !== null) {
      link[0].nativeElement.classList.toggle('slidefromleft')
      link[1].nativeElement.classList.toggle('slidefromright')
      link[2].nativeElement.classList.toggle('slidefromleft')
      link[3].nativeElement.classList.toggle('slidefromright')
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
        this.navEl.classList.toggle('anti-slant');
        this.bodyEl.classList.toggle('slant');
      }
    }
    return this.menuOn
  }
}

