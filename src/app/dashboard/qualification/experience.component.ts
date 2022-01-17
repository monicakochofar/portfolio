import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {

  @Input() showTabs = true;
  @Input() workItemList: any;
  @Input() educationItemList: any;

  currentTab = 'work';

  constructor() {}

  ngOnInit() {


  }
}
