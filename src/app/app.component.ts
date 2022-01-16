import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'portfolio';

  navLinks = [
    {link: '#home', text: 'Home', icon: 'estate', isActive: true},
    {link: '#about', text: 'About', icon: 'user', isActive: false},
    {link: '#skills', text: 'Skills', icon: 'file-alt', isActive: false},
    {link: '#services', text: 'Services', icon: 'briefcase-alt', isActive: false},
    {link: '#portfolio', text: 'Portfolio', icon: 'scenery', isActive: false},
    {link: '#contact', text: 'Contact', icon: 'message', isActive: false}
  ];

  @HostListener('window:scroll', ['$event'])
  scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    const scrollY = window.scrollY;
    if (scrollY >= 560) {
      scrollUp?.classList.add('show-scroll');
    } else {
      scrollUp?.classList.remove('show-scroll');
    }
  }

  constructor(private location: Location) {
  }

  clickedNavLink(navLink: any) {
    this.setCurrentlyActiveLinkFalse();
    navLink.isActive = true;
  }

  setCurrentlyActiveLinkFalse() {
    const currentlyActiveLink = this.navLinks.find(el => el.isActive === true);
    currentlyActiveLink && (currentlyActiveLink.isActive = false);
  }

  scrollUpClicked() {
    window.location.hash = '';
    this.setCurrentlyActiveLinkFalse();
    this.navLinks[0].isActive = true;
  }

  clickedScrollDown(event: any) {
    this.setCurrentlyActiveLinkFalse();
    const aboutLink = this.navLinks.find(el => el.text === 'About');
    aboutLink && (aboutLink.isActive = true);
  }
}
