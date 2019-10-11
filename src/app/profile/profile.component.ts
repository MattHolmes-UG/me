import { Component, ViewChild, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ProjectService } from '../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChildren('progress') progressdivs: any
  @ViewChild('title') title: ElementRef
  @ViewChild('firstrow') firstrow: ElementRef
  @ViewChild('profilepic') mypic: ElementRef
  @ViewChild('designs') designs: ElementRef
  @ViewChild('row2') secondrow: ElementRef
  @ViewChild('skills') skilldiv: ElementRef
  @ViewChild('slide') slide: ElementRef
  preview: any
  tools: any
  slides: any
  index: number = 0
  responsiveObj = {
    0: {
      items: 1
    },
    700: {
      items: 1
    },
    1000: {
      items: 1
    }
  }

  constructor(private projectService: ProjectService, private router: Router) {
  }
  
  ngOnInit() {
    this.tools = this.projectService.getSkills()
    this.slides = this.projectService.getProjects().map(project => project.imageUrl).reverse();
    this.preview = this.slide.nativeElement.childNodes[0];
    window.addEventListener('scroll', () => {
      const progress = [...this.progressdivs._results.map(elementRef => { return elementRef.nativeElement })]

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
        this.title.nativeElement.style.visibility = 'hidden'
        this.firstrow.nativeElement.style.visibility = 'hidden'
        this.secondrow.nativeElement.style.visibility = 'hidden'
        if (pageYOffset > 230) {
          this.title.nativeElement.style.visibility = 'visible'
          this.title.nativeElement.classList.add('slidedown');
        }
        if (pageYOffset > 440) {
          this.firstrow.nativeElement.childNodes[0].style.visibility = 'visible'
          this.firstrow.nativeElement.childNodes[1].style.visibility = 'visible'//just for fun
          this.designs.nativeElement.childNodes[0].classList.add('slideup');
          this.designs.nativeElement.childNodes[1].classList.add('slidedown');
          this.designs.nativeElement.childNodes[2].classList.add('slideup');
          this.mypic.nativeElement.classList.add('slidefromleft');
        }
        if (pageYOffset > 910) {
          this.skilldiv.nativeElement.style.visibility = 'visible'
          this.slide.nativeElement.style.visibility = 'visible'
          this.skilldiv.nativeElement.classList.add('slidefromleft');
          this.slide.nativeElement.classList.add('slideup');
          progress.forEach(bar => {
            bar.classList.add('progressSlide');
          })
        }
      }
    })
  }
}
