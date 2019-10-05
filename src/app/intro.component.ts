import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  template: `
  <div id="home" class="intro-container">
    <div class="flex-container">
      <div class="intro-text">
        <h1>Hi, I am <span id="name">Matthew Holmes</span> </h1>
        <div class="invisible1"><h4 class="slidefromright1">Full-stack Web Developer</h4></div>
        <div class="invisible2"><h3 class="slidefromleft2"> If you can imagine it, we can make it </h3></div>
        
      </div>
      <div class="btn-cont">
        <a [routerLink]="['/']" fragment="about">
          <button class="btn"><span class="slidefromleft1"> View Porfolio </span>
          <i class="icon">&rarr;</i></button>
        </a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./intro.component.css']
})
export class IntroPageComponent {
}

