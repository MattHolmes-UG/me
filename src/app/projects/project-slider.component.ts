import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'slider',
  template: `
  <div class="container">
    <owl-carousel-o [options]="customOptions">
      <ng-container *ngFor="let slide of slideStore">
        <ng-template carouselSlide [id]="slide.id">
          <img [src]="slide.imageUrl"/>
        </ng-template>
      </ng-container>
    </owl-carousel-o>
  </div>
  `,
  styles: [`
    // .owl-item {width: 23em !important; background-color: grey !important;}
    // img {margin-top: 0; object-fit: cover; height: 10em !important; width: 23em !important;}
  `]
})

export class ProjectSliderComponent implements OnInit {
  slideStore: any

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.slideStore = this.projectService.getProjects().filter(project => project.title !== 'Scientific calculator')
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoHeight: false,
    autoplaySpeed: 2000,
    dots: false,
    navSpeed: 1000,
    navText: ['<div class="fa fa-arrow-left"></div>','<div class="fa fa-arrow-right"></div>'],
    responsiveRefreshRate: 100,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }
}