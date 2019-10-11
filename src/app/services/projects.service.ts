import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ProjectService {
  getProjects() {
    // let subject = new Subject()
    // subject.next(PROJECTS)
    return PROJECTS
  }
  getProject(id:number) {
    return PROJECTS.find(event => event.id === id);
  }
  getNavLinks() {
    return NAVS
  }
}
const PROJECTS = [
  {
    id: 1,
    title: 'Therapy.com',
    imageUrl: '/assets/therapy1.PNG',
    link: '#',
    description: 'Website for online therapy built in nodejs. It offers an in-app chat between doctor and patient.',
    designtools: ['NodeJS','HTML5','CSS3','ES6','MongoDB'],
    images: ['/assets/therapy1.PNG', '/assets/therapy2.PNG', '/assets/therapy3.PNG']
  },
  {
    id: 2,
    title: 'mattholmes.herokuapp.com',
    imageUrl: '/assets/portfolio.PNG',
    link: 'https://mattholmes.herokuapp.com',
    description: 'A single page portfolio web app built with angular and nodejs. It also incorporates features from bootstrap framework.',
    designtools: ['Angular', 'HTML5', 'CSS3', 'Javascript', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery', 'Heroku', 'Nodejs'],
    images: ['/assets/portfolio.PNG', '/assets/portfolio1.PNG', '/assets/portfolio2.PNG', '/assets/portfolio3.PNG']
  },
  // {
  //   id: 3,
  //   title: 'purplebynk.com',
  //   imageUrl: '/assets/purple.jpg',
  //   link: '#',
  //   description: "Doesn't exist yet but we are getting there",
  //   designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery',
  //     'NodeJS', 'MongoDB']
  // },
  {
    id: 3,
    title: 'Scientific calculator',
    imageUrl: '/assets/calc2.PNG',
    link: 'https://mattholmes-ug.github.io/Scientific-Calc',
    description: 'Scientific calculator build with pure javascript. It handles basic and advanced mathematical calculations. It also has options for simultaneous and quadratic equations, as well as, areas of both 2D and 3D shapes and the mean of a group of numbers.',
    designtools: ['HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Javascript'],
    images: ['/assets/calc.PNG', '/assets/calc1.PNG', '/assets/calc2.PNG', '/assets/calc3.PNG', '/assets/calc4.PNG']
  }
]
const NAVS = [
  { title: 'Home', href: 'home' },
  { title: 'About Me', href: 'about' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact Me', href: 'contact' }
]
// https://mattholmes-ug.github.io/me/UX.4647adaa550cfda052f0.jpg