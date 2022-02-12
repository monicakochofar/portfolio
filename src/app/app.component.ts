import { NavBarDataService } from './navbar-data.service';
import { ScrollListenersService } from './scroll-listeners.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <app-header 
      [navigationLinks]="navBar.navLinks">
    </app-header>
    <main (scrollDownEvent)="clickedScrollDown($event)">
      <router-outlet></router-outlet>
    </main>
    <app-footer [navigationLinks]="navBar.navLinks"></app-footer>

    <a class="scrollup"
      aria-label="Scroll to top"
      id="scroll-up"
      href="#home">
      <i class="uil uil-arrow-up icon"></i>
    </a>
  `,
  styles: [
    `
      .scrollup {
        position: fixed;
        right: 1rem;
        bottom: -20%;
        background-color: var(--first-color-alt);
        opacity: .8;
        padding: 0.3rem 0.3rem 0 0.3rem;
        border-radius: .4rem;
        z-index: var(--z-tooltip);
        transition: .4s;
      }
      .icon {
        font-size: 1.5rem;
        color: #FFF;
      }

      .scrollup:hover {
        background-color: var(--first-color-lighter);
      }
      
      .show-scroll {
        bottom: 5rem;
      }
    `
  ],
})
export class AppComponent implements OnInit {

  title = 'portfolio';

  @HostListener('window:scroll', ['$event'])
  scrollListener() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementVisible = 20;
    this.scrollService.scrollUpButton(scrollY);
    //this.scrollService.roboBuddy(scrollY);

    const isAboutPage = this.isPage(windowHeight, elementVisible, 'about');
    this.scrollService.aboutAnimScroll(!!isAboutPage);
    

    const isPortfolioPage = this.isPage(windowHeight, elementVisible, 'portfolio-cont-grid')
    this.scrollService.portAnimScroll(!!isPortfolioPage);
    

    const isExperiencePage = this.isPage(windowHeight, elementVisible, 'work');
    this.scrollService.experienceScroll(!!isExperiencePage);
  }

  constructor(private scrollService: ScrollListenersService,
    public navBar: NavBarDataService,
    private router: Router) {}

  ngOnInit() {
    
  }

  isPage(windowHeight: any, elementVisible:any, elementID:string) {
    const workElement = document.getElementById(elementID);
    const elementTop = workElement?.getBoundingClientRect().top;
    return elementTop && (elementTop < windowHeight - elementVisible);
  }

  clickedScrollDown(event: any) {
    location.href = "#about";
  }

}
