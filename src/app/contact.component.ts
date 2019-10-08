import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles: [`
    .container {background-color: rgb(24, 23, 23); width: 100%; min-height: 50vh;
      border-top: solid 3px rgb(80, 64, 231); color: rgba(200, 200 ,200, 1); padding-top: 1em; 
      padding-bottom: 4em; text-align: center;}
    .contact {font-size: 1.3em; line-height: 2em; vertical-align: center; color: #fff;
      margin-top: 3em; cursor: pointer}
    .contact:hover {color: rgb(80, 64, 231); text-decoration: none;}
    .collapse {width: 100%; height: 100%; transition: width 2s;}
    @media screen and (max-width: 480px){
      h3 {font-size: 1.2em;}
      h2 {font-size: 1.5em;}
      .contact {font-size: 0.75em;}
    }
  `]
})
export class ContactComponent implements OnInit{
  @ViewChild('title') title: ElementRef
  @ViewChild('message') message: ElementRef
  @ViewChild('row1') row1: ElementRef
  @ViewChild('row2') row2: ElementRef

  ngOnInit() {
    this.title.nativeElement.style.visibility = 'hidden'
    this.message.nativeElement.style.visibility = 'hidden'
    this.row1.nativeElement.style.visibility = 'hidden'
    this.row2.nativeElement.style.visibility = 'hidden'
    window.addEventListener('scroll', () => {
      if (pageYOffset > 2340) {
        this.title.nativeElement.style.visibility = 'visible'
        this.title.nativeElement.classList.add('slidefromleft')
      }
      if (pageYOffset > 2420) {
        this.message.nativeElement.style.visibility = 'visible'
        this.message.nativeElement.classList.add('slidefromleft')
      }
      if (pageYOffset > 2550) {
        this.row1.nativeElement.style.visibility = 'visible'
        this.row1.nativeElement.classList.add('slideup')
        this.row2.nativeElement.style.visibility = 'visible'
        this.row2.nativeElement.classList.add('slidefromright')
      }
    })
  }
}
