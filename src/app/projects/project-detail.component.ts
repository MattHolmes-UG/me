import { Component } from '@angular/core';

@Component({
  selector: 'project-detail',
  template: `
    <nav-bar></nav-bar>
    <h2>{{project.title}}<h2>

    <slider></slider>
    <div>{{project.description}}</div><br>
    <span>Design Tools included: </span><br>
    <div>
      <ul>
        <li *ngFor="let designtool of project.designtools">{{designtool}}</li>
      </ul>
    </div>
  `,
  styles: [`
    #navbar {position: fixed;}
  `]
})

export class ProjectDetailComponent {
  project: {} = {
    id: 1,
    title: 'Therapy.com',
    imageUrl: '/assets/therapy.PNG',
    description: 'Website for online therapy with nodejs',
    designtools: ['NodeJS', 'HTML5', 'CSS3', 'ES6', 'MongoDB']
  }

}
