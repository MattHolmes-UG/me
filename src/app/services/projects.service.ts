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
    imageUrl: '/me/therapy.PNG',
    link: '#',
    description: 'Website for online therapy with nodejs',
    designtools: ['NodeJS','HTML5','CSS3','ES6','MongoDB'],
    images: ['/me/therapy.PNG', '/me/therapy1.PNG', '/me/therapy2.PNG', '/me/therapy3.PNG']
  },
  {
    id: 2,
    title: 'mattholmes-ug.com',
    imageUrl: '/me/portfolio.PNG',
    link: 'https://mattholmes-ug.github.io/me',
    description: 'Portfolio site Built with Angular',
    designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery'],
    images: ['/me/portfolio.PNG', '/me/portfolio1.PNG', '/me/portfolio2.PNG', '/me/portfolio3.PNG']
  },
  // {
  //   id: 3,
  //   title: 'purplebynk.com',
  //   imageUrl: '/me/purple.jpg',
  //   link: '#',
  //   description: "Doesn't exist yet but we are getting there",
  //   designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery',
  //     'NodeJS', 'MongoDB']
  // },
  {
    id: 3,
    title: 'Scientific calculator',
    imageUrl: '/me/calc2.PNG',
    link: 'https://mattholmes-ug.github.io/Scientific-Calc',
    description: 'Scientific calculator build with pure javascript',
    designtools: ['HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Regular Expressions'],
    images: ['/me/calc.PNG', '/me/calc1.PNG', '/me/calc2.PNG', '/me/calc3.PNG', '/me/calc4.PNG']
  }
]
const NAVS = [
  { title: 'Home', href: 'home' },
  { title: 'About Me', href: 'about' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact Me', href: 'contact' }
]
// https://mattholmes-ug.github.io/me/UX.4647adaa550cfda052f0.jpg