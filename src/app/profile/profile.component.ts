import { Component, ViewChild, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ProjectService } from '../services/projects.service';

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
  index: number = 0

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.preview = this.slide.nativeElement.childNodes[0];
    this.title.nativeElement.style.visibility = 'hidden'
    this.firstrow.nativeElement.style.visibility = 'hidden'
    this.secondrow.nativeElement.style.visibility = 'hidden'
    this.startslides();

    window.addEventListener('scroll', () => {
      const progress = [...this.progressdivs._results.map(elementRef => { return elementRef.nativeElement })]

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
    })
  }
  startslides() {
    let slides = this.projectService.getProjects().filter(project => project.title !== 'Scientific calculator')
      .map(project => project.imageUrl).reverse();
    setInterval(() => {
      if (this.index >= slides.length) this.index = 0
      if (this.index < slides.length) {
        this.preview.src = slides[this.index]
        this.preview.classList.remove('appear')
        setTimeout(() => { this.preview.classList.add('appear')}, 80); //to add a fade in effect
      }
      this.index += 1
    }, 6000);
  }
}
const SKILLS = [
  {
    title: 'HTML',
    percentage: '80'
  },
  {
    title: 'CSS',
    percentage: '70'
  },
  {
    title: 'JavaScript',
    percentage: '90'
  },
  {
    title: 'Nodejs',
    percentage: '80'
  },
  {
    title: 'MongoDB',
    percentage: '75'
  },
  {
    title: 'Angular',
    percentage: '70'
  },
  {
    title: 'Bootstrap',
    percentage: '75'
  }
]