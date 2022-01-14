import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  socialURL = {
    linkedIN: 'https://www.linkedin.com/',
    gitHub: 'https://www.github.com/'
  }
  
  constructor() {}

  ngOnInit() {


  }
}
