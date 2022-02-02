import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-home></app-home>
    <app-about></app-about>
    <app-portfolio></app-portfolio>
    <app-experience [showTabs]="false"></app-experience>
  `
})

export class DashboardComponent {

  constructor() {}

}
