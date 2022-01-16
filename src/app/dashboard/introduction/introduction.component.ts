import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  socialURL = {
    linkedIN: 'https://www.linkedin.com/',
    gitHub: 'https://www.github.com/'
  }
  
  constructor(private router: Router) {}


  @ViewChild('homeElement', {static: false}) 
  homeElement: ElementRef | undefined;

  scrollDown() {
    if (this.homeElement) {
      this.homeElement.nativeElement.dispatchEvent(new CustomEvent('scrollDownEvent', {
        bubbles: true,
        detail: {}
      }));
    }
  }
}
