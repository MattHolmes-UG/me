import { Component, Input } from '@angular/core';
import { ProjectService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-detail',
  template: `
    <div class="project-container">
      <a class="link" [href]=project.link><h2>{{project.title}}</h2></a>
      <slider [responsiveObj]="responsiveObj" [slides]="slides"></slider>
      <p class="description">{{project.description}} <a [href]="project.link" target="_blank" class="link"
        >Click to go to site</a></p>
      <div class="toollist">
        <span class="listtext">Some design tools used in the project include: </span><br>
        <ul>
          <li *ngFor="let designtool of project.designtools" class="col-sm-4 col-xs-6">{{designtool}}</li>
        </ul>
      <div>
    </div>
    <div id='container'></div>
  `,
  styles: [`
    * {font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}
    .project-container {margin-top: 2em;}
    h2 {margin: 0; font-variant: small-caps;}
    .description {margin-left: 1em; font-size: 1em; margin-top: 1em;}
    .toollist {font-variant: small-caps; padding-bottom: 6em !important;}
    .listtext {margin-left: 1em; font-size: 1.3em; display: block;}
    ul {list-style-type: circle; margin: 0.2em 1em 2em;}
    li {margin-bottom: 1em;}
    .link {color: black;}
    @media screen and (max-width: 480){padding-left: 0;}
    #container {width: 100vw; height: 100vh; background-color: black; opacity: 0.5; position: absolute;
      top: 0; z-index: 6;}
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
      items: 2,
    }
  }
}
