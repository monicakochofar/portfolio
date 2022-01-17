import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  socialURL = {
    linkedIN: 'https://www.linkedin.com/',
    gitHub: 'https://www.github.com/'
  }

  constructor() {}

}
