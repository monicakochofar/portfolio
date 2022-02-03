import { UserDataService } from './../user-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  technologies = this.userData.getAboutTechnologies();
  description = this.userData.getAboutDesc();

  constructor(private userData: UserDataService) {}

}
