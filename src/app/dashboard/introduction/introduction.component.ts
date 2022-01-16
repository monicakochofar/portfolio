import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  socialURL = {
    linkedIN: 'https://www.linkedin.com/',
    gitHub: 'https://www.github.com/'
  }
  
  constructor(private router: Router) {}

}
