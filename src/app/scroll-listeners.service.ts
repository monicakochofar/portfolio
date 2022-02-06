import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollListenersService {

  constructor() { }

  timesRanMap = {
    about: 0,
    portfolio: 0,
    exp: 0
  };

  // SSCROLL UP BUTTON ---
  scrollUp(scrollY: any) {
    const scrollUpElement = document.getElementById('scroll-up');
    if (scrollY >= 560 && scrollUpElement) {
      scrollUpElement.classList.add('show-scroll');
    } else if (scrollUpElement && scrollUpElement.classList.contains('show-scroll')){
      scrollUpElement.classList.remove('show-scroll');
    }
  }

  // ABOUT page ---

  aboutAnimScroll(isAboutPage: boolean) {
    if (isAboutPage && this.timesRanMap.about === 0) {
      this.delayedAnimationAbout();
      this.timesRanMap.about = 1;
    }
  }

  delayedAnimationAbout() {
    const blockElement = document.getElementById('about-block');
    const workElements = document.getElementsByClassName('tech-item');
    const length = workElements.length;
    let timeout = 1000;
    for (let i=0; i<length; i++) {
      setTimeout(() => {
        const element = workElements[i];
        element.classList.remove('about-hidden');
      }, timeout);
      timeout += 400;
    }
    if (blockElement && blockElement.classList.contains('block-hidden')){
      blockElement.classList.remove('block-hidden');
    }
  }

  // PORTFOLIO page ---

  portAnimScroll(isPortfolioPage: boolean) {
    if( isPortfolioPage && this.timesRanMap.portfolio === 0) {
      this.delayedAnimationPort();
      this.timesRanMap.portfolio = 1;
    }
  }

  delayedAnimationPort() {
    const workElements = document.getElementsByClassName('portfolio-content');
    const length = workElements.length;
    let timeout = 100;
    for (let i=0; i<length; i++) {
      setTimeout(() => {
        const element = workElements[i];
        element.classList.remove('portfolio-hidden');
      }, timeout);
      timeout += 400;
    }
    setTimeout(() => {
      const gitHubElements = document.getElementsByClassName('icon-git');
      if (gitHubElements) {
        for (let i=0; i<length; i++) {
          const elementG = gitHubElements[i];
          elementG.classList.add('shake');
        
        }
      }
    }, timeout + 200);

  }

  // EXPERIENCE PAGE (timeline) ---

  experienceScroll(isExperiencePage: boolean) {
    if (isExperiencePage && this.timesRanMap.exp === 0) {
      this.delayedAnimationExp();
      this.timesRanMap.exp = 1;
    }
  }

  delayedAnimationExp() {
    const workElements = document.getElementsByClassName('timeline');
    const length = workElements.length;
    let timeout = 400;
    for (let i=0; i<length; i++) {
      setTimeout(() => {
        const element = workElements[i];
        const hasTop = element.classList.contains('top');
        element.classList.remove(hasTop ? 'top' : 'bottom');
      }, timeout);
      timeout += 400;
    }
  }

}
