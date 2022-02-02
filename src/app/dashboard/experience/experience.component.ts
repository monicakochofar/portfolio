import { UserDataService } from '../user-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent {

  @Input() showTabs = true;
  @Input() workItemList = this.userData.getWorkExperience();

  currentTab = 'work';

  constructor(private userData: UserDataService) {}

}
