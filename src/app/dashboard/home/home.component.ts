import { UserDataService } from './../user-data.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @ViewChild('homeElement', {static: false}) 
  homeElement: ElementRef | undefined;

  socialURL = {
    linkedIN: this.userData.LINKEDIN_URL,
    gitHub: this.userData.GITHUB_URL
  };
  
  constructor(private userData: UserDataService) {}

  ngOnInit() {
    const typeWriter = new Typewriter(document.getElementById('title'));
    typeWriter.typeString("Hi, I'm Monica").start();
  }

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
    window.location.href = `mailto:${this.userData.getContactMail()}`;
  }

}
