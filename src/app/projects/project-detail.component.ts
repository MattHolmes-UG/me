import { Component, Input } from '@angular/core';
import { ProjectService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-detail',
  template: `
    <nav-bar></nav-bar>
    <div class="project-container">
      <a class="link" [href]=project.link><h2>{{project.title}}</h2></a>
      <slider [responsiveObj]="responsiveObj" [slides]="slides"></slider>
      <p>{{project.description}}</p><br>
      <div class="toollist">
        <span>Some of the design tools used in the project include: </span><br>
        <ul>
          <li *ngFor="let designtool of project.designtools" class="col-sm-4 col-xs-6">{{designtool}}</li>
        </ul>
      <div>
    </div>
  `,
  styles: [`
    * {font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;}
    h2 {margin: 0; font-variant: small-caps;}
    p {margin-left: 2em; font-size: 1.1em;}
    .toollist {font-variant: small-caps; padding-bottom: 6em !important;}
    span {margin-left: 2em; font-size: 1.3em; padding: 0.8em 0;}
    ul {list-style-type: circle; margin: 1em 1em 2em;}
    li {margin-bottom: 1em;}
    .link {color: black;}
  `]
})

export class ProjectDetailComponent {
  @Input() project
  slides

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.project = this.projectService.getProject(+this.route.snapshot.params['id'])
    this.slides = this.project.images
  }
  responsiveObj = {
    0: {
      items: 1
    },
    700: {
      items: 2
    },
    1000: {
      items: 3,
    }
  }
}
