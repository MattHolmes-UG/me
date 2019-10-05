import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-expand-md" #nav>
      <ul class="nav nav-tabs">
        <li class="nav-item" *ngFor="let link of navs">
          <a [routerLink]="['/']" [fragment]=link.href class="nav-link" #links>{{link.title}}</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{
  @ViewChild('nav') navdiv: ElementRef
  @ViewChildren('links') links: any
  navs: any = [{ title: 'Home', href: 'home' }, { title: 'About Me', href: 'about' }, 
    { title: 'Projects', href: 'projects' }, { title: 'Contact Me', href: 'contact' }]
  menu: boolean = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const nav = this.links._results.map(el => {return el.nativeElement})
      nav.forEach(link => { link.classList.remove('active')})
      if (pageYOffset < 500) {
        nav[0].classList.add('active')
      } else if (pageYOffset > 500 && pageYOffset < 1500) {
        nav[1].classList.add('active')
      } else if (pageYOffset > 1500 && pageYOffset < 2680) {
        nav[2].classList.add('active')
      } else if (pageYOffset > 2680) {
        nav[3].classList.add('active')
      }
      if (pageYOffset > 699) {
        this.navdiv.nativeElement.classList.add('fixed');
      }
      else this.navdiv.nativeElement.classList.remove('fixed');
    })
  }
}
