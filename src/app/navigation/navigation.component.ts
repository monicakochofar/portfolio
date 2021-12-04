import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  buttonsList = [
    {name: 'about'},
    {name: 'experience'},
    {name: 'projects'},
    {name: 'certificates'}
  ];

  constructor() {}

  ngOnInit() {

  }

  clickButton(name: string) {
    console.log('name', name);
  }
}
