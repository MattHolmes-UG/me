import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ProjectService } from '../services/projects.service';

@Component({
  selector: 'project-list',
  template: `
  <div id="projects" class="container">
    <h2 #title>PROJECTS</h2>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12" *ngFor='let project of projects' #projects>
        <div [routerLink]="['projects', project.id]">
          <h3>{{project?.title}}</h3>
          <div class="img-cont" [style]>
            <img [src]=project.imageUrl class="img img-responsive"/>
          </div>
          <span class="caption">{{project?.description}}</span>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    img {min-width: 50%; height: 23em; display: block; margin: auto;}
    .img-cont {border: solid 1px rgba(24, 23, 23, 0.1); margin: 2em 0 1em 0;}
    .container {margin-bottom: 4em;}
    .caption {font-size: 1em; color: rgb(80, 64, 231);}
    h3 {font-variant: small-caps; margin-top: 2em;}
    h2 {margin-bottom: 1em;}
    * {text-align: center;}
    a {text-decoration: none; color: rgb(80, 64, 231);}
    @media screen and (max-width: 999px){img {height: auto;}}
    @media screen and (max-width: 480px){
      h3 {font-size: 1.2em;}
      h2 {font-size: 1.5em;}
      .caption {font-size: 0.75em;}
    }
  `]
})

export class ProjectListComponent implements OnInit {
  projects: any
  @ViewChildren('projects') projectsdiv: any
  @ViewChild('title') title: ElementRef

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
  ngOnInit() {
    window.addEventListener('scroll', () => {
      const arr = this.projectsdiv._results.map(elementRef => { return elementRef.nativeElement });
      this.title.nativeElement.style.visibility = 'hidden'
      arr.forEach(element => {
        element.style.visibility = 'hidden'
      });
      if (pageYOffset > 1300) {
        this.title.nativeElement.style.visibility = 'visible'
        this.title.nativeElement.classList.add('slidefromleft');
      }
      if (pageYOffset > 1490) {
        arr.forEach((element, index) => {
          if (index % 2 === 0) {
            element.style.visibility = 'visible';
            element.classList.add('slidefromright');
          } else {
            element.style.visibility = 'visible';
            element.classList.add('slidefromleft');
          }
        });
      }
    })
  }
}