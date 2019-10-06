import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ProjectService {
  getProjects() {
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
    imageUrl: './../../assets/therapy.PNG',
    link: '#',
    description: 'Website for online therapy with nodejs',
    designtools: ['NodeJS','HTML5','CSS3','ES6','MongoDB']
  },
  {
    id: 2,
    title: 'mattholmes_ug.com',
    imageUrl: './../../assets/portfolio.PNG',
    link: 'https://mattholmes-ug.github.io/me',
    description: 'Portfolio site Built with Angular',
    designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery']

  },
  {
    id: 3,
    title: 'purplebynk.com',
    imageUrl: './../../assets/purple.jpg',
    link: '#',
    description: "Doesn't exist yet but we are getting there",
    designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery',
      'NodeJS', 'MongoDB']
  },
  {
    id: 4,
    title: 'Scientific calculator',
    imageUrl: './../../assets/calc2.PNG',
    link: 'https://mattholmes-ug.github.io/Scientific-Calc',
    description: 'Scientific calculator build with pure javascript',
    designtools: ['HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Regular Expressions']
  }
]
const NAVS = [
  { title: 'Home', href: 'home' },
  { title: 'About Me', href: 'about' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact Me', href: 'contact' }
]