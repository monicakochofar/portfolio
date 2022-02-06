import { Renderer2 } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMenu = false;
  navLinks: any;

  @Input('navigationLinks') set navigationLinks(value: any) {
    this.navLinks = value;
  }
  
  constructor(private renderer: Renderer2) {
  }

  clickedNavLink(navLink: any) {
    this.showMenu = false;
  }

  ngAfterViewInit() {
    this.setDarkLightTheme();
  }

  setDarkLightTheme() {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    if (selectedTheme && themeButton) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    themeButton?.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);

      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    })
  }

  clickedContactMe() {
    const SHAKE_CLASS = "shake";
    this.showMenu = false;
    const contactMeElement = document.getElementById("contact-me");
    this.removeClassName(contactMeElement, SHAKE_CLASS);

    setTimeout(() => {
      this.addClassName(contactMeElement, SHAKE_CLASS)
    }, 400);
  }

  removeClassName(element, className) {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    }
  }

  addClassName(element, className) {
    this.renderer.addClass(element, className);
  }

}
