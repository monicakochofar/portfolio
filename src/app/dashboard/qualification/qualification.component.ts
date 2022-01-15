import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})

export class QualificationComponent implements OnInit {

  currentTab = 'education';

  workItemList = [
    { 
      title: 'Computer Engineer', 
      location: 'Peru - University', 
      years: '2009 - 2014', 
      decoration: {position: 'bottom',hasCircle: true, hasLine: true}
    },
    { 
      title: 'Computer Engineer', 
      location: 'Peru - University', 
      years: '2009 - 2014', 
      decoration: {position: 'top',hasCircle: true, hasLine: true}
    },
    { 
      title: 'Computer Engineer', 
      location: 'Peru - University', 
      years: '2009 - 2014', 
      decoration: {position: 'bottom',hasCircle: true, hasLine: false}
    },
  ];

  educationItemList = [
    { 
      title: 'Computer Engineer', 
      location: 'Peru - University', 
      years: '2009 - 2014', 
      decoration: {position: 'bottom',hasCircle: true, hasLine: true}
    },
    { 
      title: 'Computer Engineer', 
      location: 'Peru - University', 
      years: '2009 - 2014', 
      decoration: {position: 'top',hasCircle: true, hasLine: true}
    },
    { 
      title: 'Computer Engineer', 
      location: 'Peru - University', 
      years: '2009 - 2014', 
      decoration: {position: 'bottom',hasCircle: true, hasLine: false}
    },
  ];

  constructor() {}

  ngOnInit() {


  }
}
