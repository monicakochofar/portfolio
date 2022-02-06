import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarDataService {

  constructor() { 
  }

  navLinks = [
    {link: '#home', label: 'Home', icon: 'home', isActive: true},
    {link: '#about', label: 'About', icon: 'user', isActive: false},
    {link: '#portfolio', label: 'Portfolio', icon: 'scenery', isActive: false},
    {link: '#experience', label: 'Experience', icon: 'briefcase-alt', isActive: false}
    // {link: '#contact', label: 'Contact', icon: 'message', isActive: false}
  ];

  // private removeCurrHighlight() {
  //   const currentlyActiveLink = this.navLinks.find(el => el.isActive === true);
  //   currentlyActiveLink && (currentlyActiveLink.isActive = false);
  // }

  // setNavLinkHighlight(label) {
  //   //window.location.hash = '#' + label.toLowerCase();
  //   console.log('set navlink', label)
  //   const navLink = this.navLinks.find(el => el.label === label);
  //   if (navLink && !navLink.isActive) {
  //     this.removeCurrHighlight();
  //     navLink && (navLink.isActive = true);
  //   }
  // }

}
