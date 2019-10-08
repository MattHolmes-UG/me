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
    designtools: ['NodeJS','HTML5','CSS3','ES6','MongoDB'],
    images: ['/assets/therapy.PNG', '/assets/therapy1.PNG', '/assets/therapy2.PNG', '/assets/therapy3.PNG']
  },
  {
    id: 2,
    title: 'mattholmes-ug.com',
    imageUrl: './../../assets/portfolio.PNG',
    link: 'https://mattholmes-ug.github.io/me',
    description: 'Portfolio site Built with Angular',
    designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery'],
    images: ['/assets/portfolio.PNG', '/assets/portfolio1.PNG', '/assets/portfolio2.PNG', '/assets/portfolio3.PNG']
  },
  // {
  //   id: 3,
  //   title: 'purplebynk.com',
  //   imageUrl: './../../assets/purple.jpg',
  //   link: '#',
  //   description: "Doesn't exist yet but we are getting there",
  //   designtools: ['Angular', 'HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Owl Carousel', 'JQuery',
  //     'NodeJS', 'MongoDB']
  // },
  {
    id: 3,
    title: 'Scientific calculator',
    imageUrl: './../../assets/calc2.PNG',
    link: 'https://mattholmes-ug.github.io/Scientific-Calc',
    description: 'Scientific calculator build with pure javascript',
    designtools: ['HTML5', 'CSS3', 'ES6', 'Bootstrap', 'Regular Expressions'],
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