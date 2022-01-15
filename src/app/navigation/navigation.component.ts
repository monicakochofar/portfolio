import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  showMenu = false;
  navLinks: any;

  @Input('navigationLinks') set navigationLinks(value: any) {
    this.navLinks = value;
    // const currentlyActiveLink = this.navLinks.find(el => el.isActive === true);
    // currentlyActiveLink && (currentlyActiveLink.isActive = false);
    // this.navLinks[0].isActive = value;
  }

  @Output() clickedLink = new EventEmitter<string>();
  
  constructor() {}

  clickedNavLink(navLink: any) {
    this.showMenu = false;
    this.clickedLink.emit(navLink);
  }

  // setCurrentlyActiveLinkFalse() {
  //   const currentlyActiveLink = this.navLinks.find(el => el.isActive === true);
  //   currentlyActiveLink && (currentlyActiveLink.isActive = false);
  // }
}
