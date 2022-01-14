import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-introduction></app-introduction>
    <app-about></app-about>
  `
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {


  }
}
