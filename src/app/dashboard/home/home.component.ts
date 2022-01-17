import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('homeElement', {static: false}) 
  homeElement: ElementRef | undefined;
  
  socialURL = {
    linkedIN: 'https://www.linkedin.com/in/monicakochofar/',
    gitHub: 'https://github.com/monicakochofar'
  }
  
  constructor(private router: Router) {}

  scrollDown() {
    if (this.homeElement) {
      this.homeElement.nativeElement.dispatchEvent(new CustomEvent('scrollDownEvent', {
        bubbles: true,
        detail: {}
      }));
    }
  }

  setImagePath(path: string) {
    const mainImage = document.getElementById("main-img");
    mainImage && mainImage.setAttribute('href', path);
  }
  
  ngAfterViewInit() {
    const mainImage = document.getElementById("main-img");
    mainImage && mainImage.setAttribute('href', 'assets/img/robot-preview.png');
  }

  contactMeClicked() {
    window.location.href = "mailto:monicakochofar@gmail.com";
  }
}
