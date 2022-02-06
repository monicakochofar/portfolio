import { NavBarDataService } from './../../navbar-data.service';
import { UserDataService } from './../user-data.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('homeElement', {static: false}) 
  homeElement: ElementRef | undefined;

  socialURL = {
    linkedIN: this.userData.LINKEDIN_URL,
    gitHub: this.userData.GITHUB_URL
  };
  
  constructor(private userData: UserDataService,
    private navBar: NavBarDataService) {}

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

  // pageShown() {
  //   this.navBar.setNavLinkHighlight("Home");
  // }
}
