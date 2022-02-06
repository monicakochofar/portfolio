import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <div id="dashboard">
    <app-home></app-home>
    <app-about></app-about>
    <app-portfolio></app-portfolio>
    <app-experience [showTabs]="false"></app-experience>
  </div>
  `
})

export class DashboardComponent {

  constructor() {}

}
