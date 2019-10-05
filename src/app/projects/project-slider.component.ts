import { Component } from '@angular/core';

@Component({
  selector: 'project-slider',
  template: `
    <div class="carousel" *ngFor="let project of projects">
      <div class="img-container">
        <img [src]=project.imageUrl/>
      </div>
    </div>
  `,
  styles: ['color: green']
})

export class ProjectSliderComponent {
  projects: any = PROJECTS

}
const PROJECTS = [
  {
    title: 'Scientific calculator in JS',
    imageUrl: '/'
  },
  {
    title: 'Therapy.com',
    imageUrl: '/'
  },
  {
    title: 'mattHolmes_ug.com',
    imageUrl: '/'
  },
  {
    title: 'purplebynk.com',
    imageUrl: '/'
  }
]