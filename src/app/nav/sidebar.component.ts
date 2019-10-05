import { Component, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'side-nav',
  template: `
  <nav class="anti-slant" id="sideMenu" [style.width]="menuOn===true ? '100%' : '0'"
    (click)="toggleMenu()">
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
export class SideNavComponent {
  menuOn: boolean = false;
  @ViewChildren('links') links: any
  navs: any = [{ title: 'Home', href: 'home' }, { title: 'About Me', href: 'about' },
  { title: 'Projects', href: 'projects' }, { title: 'Contact Me', href: 'contact' }]
  private bodyEl: HTMLBodyElement
  private navEl: HTMLElement
  constructor(ref: ElementRef) {
    this.navEl = ref.nativeElement
    this.bodyEl = ref.nativeElement.offsetParent
  }

  toggleMenu() {
    const link = this.links._results
    this.menuOn = !this.menuOn
    if (this.menuOn !== null) {
      this.navEl.classList.toggle('anti-slant');
      link[0].nativeElement.classList.toggle('slidefromleft')
      link[1].nativeElement.classList.toggle('slidefromright')
      link[2].nativeElement.classList.toggle('slidefromleft')
      link[3].nativeElement.classList.toggle('slidefromright')
      this.bodyEl.classList.toggle('slant');
    }
    return this.menuOn
  }
}

