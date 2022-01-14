import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  socialURL = {
    linkedIN: 'https://www.linkedin.com/',
    gitHub: 'https://www.github.com/'
  }
  
  constructor() {}

  ngOnInit() {


  }
}
