import { Component, ViewChildren, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  <div class="menuIcon" [class.change]="menuOn===true" (click)="toggleMenu()" #menuIcon>
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SideNavComponent implements OnInit {
  menuOn: boolean = false;
  @ViewChild('menuIcon') menuicon: any
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
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
        link[0].nativeElement.classList.toggle('slidefromleft')
        link[1].nativeElement.classList.toggle('slidefromright')
        link[2].nativeElement.classList.toggle('slidefromleft')
        link[3].nativeElement.classList.toggle('slidefromright')
        this.navEl.classList.toggle('anti-slant');
        this.bodyEl.classList.toggle('slant');
      } else { this.menuicon.nativeElement.style.display = 'none' }
    }
    return this.menuOn
  }
}

