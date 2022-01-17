import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor() {}

  @Input() navigationLinks: any;

  clickedContactMe() {
    const contactMeElement = document.getElementById("contact-me");
    if (contactMeElement) {
      if (contactMeElement.classList.contains('shake')) {
        contactMeElement.classList.remove("shake");
      }
      setTimeout(() => {
        contactMeElement.classList.add("shake");
      }, 400);
    }
  }

}
