import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../services/projects.service';

@Component({
  selector: 'slider',
  template: `
  <owl-carousel [options]="carouselOptions" [items]="slideStore" [carouselClasses]="['owl-theme', 'row', 'sliding']">
    <div class="item" *ngFor="let image of slideStore">
      <div class="slide-image" [style.background-image]="'url('+image+')'"></div>
    </div>
  </owl-carousel>
  `,
  styles: [`
    img {}
    .slide-image {background-size: cover; background-position: center; margin-top: 0; width: 100% !important; height: 22em;}
    @media screen and (max-width: 1112px){.slide-image {height: 16em;}}
    @media screen and (max-width: 700px){.slide-image {height: 22em;}}
    @media screen and (max-width: 500px){.slide-image {height: 12em;}}
    @media screen and (max-width: 330px){.slide-image {height: 11em;}}
  `]
})

export class ProjectSliderComponent implements OnInit {
  @Input() slides
  @Input() responsiveObj
  slideStore: any

  constructor(private projectService: ProjectService) {
    
  }

  ngOnInit() {
    this.slideStore = this.slides
    this.carouselOptions.responsive = this.responsiveObj
  }
  carouselOptions:any = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    autoplayHoverPause: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 40,
    mouseDrag: true,
    touchDrag: true,
    center: true,
    navSpeed: 1000,
    nav: true,
    navText: ['<div class="fa fa-angle-double-left"></div>','<div class="fa fa-angle-double-right"></div>'],
  }
}