import { ScrollListenersService } from './scroll-listeners.service';
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
    {link: '#home', text: 'Home', icon: 'home', isActive: true},
    {link: '#about', text: 'About', icon: 'user', isActive: false},
    {link: '#portfolio', text: 'Portfolio', icon: 'scenery', isActive: false},
    {link: '#experience', text: 'Experience', icon: 'briefcase-alt', isActive: false}
    // {link: '#contact', text: 'Contact', icon: 'message', isActive: false}
  ];

  // navLinks = [
  //   {link: '#home', text: 'Home', icon: 'home', isActive: true},
  //   {link: '#services', text: 'Services', icon: 'briefcase-alt', isActive: false},
  //   {link: '#about', text: 'About', icon: 'user', isActive: false},
  //   {link: '#skills', text: 'Skills', icon: 'file-alt', isActive: false},
  //   {link: '#portfolio', text: 'Portfolio', icon: 'scenery', isActive: false},
  //   {link: '#contact', text: 'Contact', icon: 'message', isActive: false}
  // ];

  @HostListener('window:scroll', ['$event'])
  scrollListener() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementVisible = 20;
    this.scrollService.scrollUp(scrollY);
    this.scrollService.aboutAnimScroll(windowHeight, elementVisible);
    this.scrollService.portAnimScroll(windowHeight, elementVisible);
    this.scrollService.experienceScroll(windowHeight, elementVisible);
  }

  constructor(private scrollService: ScrollListenersService) {
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
