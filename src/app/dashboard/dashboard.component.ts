import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

// selector: 'app-dashboard',
// template: `
//   <app-home></app-home>
//   <app-about></app-about>
// `,
export class DashboardComponent {

  workItemList = [
    { 
      title: 'Senior Front-End Developer', 
      location: 'Rogers Communications', 
      years: 'Oct 2021 - Present', 
      decoration: { position: 'top',hasCircle: true, hasLine: true }
    },
    { 
      title: 'Front-End Developer', 
      location: 'Rogers Communications', 
      years: 'Sep 2019 - Oct 2021', 
      decoration: { position: 'bottom',hasCircle: true, hasLine: true }
    },
    { 
      title: 'Full-Stack Developer', 
      location: 'Rogers Communications', 
      years: 'Jan 2018 - Sep 2019', 
      decoration: { position: 'top',hasCircle: true, hasLine: true }
    },
    { 
      title: 'Java J2EE Developer <br> (E-Commerce)', 
      location: 'Rogers Communications', 
      years: 'May 2016 - Jan 2018', 
      decoration: { position: 'bottom',hasCircle: true, hasLine: true }
    },
    { 
      title: 'INTRO Associate (New Grad Program)', 
      location: 'Rogers Communications', 
      years: 'May 2015 - May 2016', 
      decoration: { position: 'top',hasCircle: true, hasLine: false }
    },
    { 
      title: 'Ruby on Rails / Unix Developer (Co-op)', 
      location: 'Bell Canada', 
      years: 'Aug 2013 - Aug 2014', 
      decoration: { position: 'bottom',hasCircle: true, hasLine: false }
    },
    { 
      title: 'Technical Writer <br> (Co-op)', 
      location: 'GNOME foundation - Google Summer of Code', 
      years: 'May 2012 - Aug 2012', 
      decoration: { position: 'top',hasCircle: true, hasLine: false }
    }
  ];

  sliderItemList = [
    {
      imgSrc: 'assets/img/portfolio1.jpg',
      title: 'Modern Website',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      isActive: true
    },
    {
      imgSrc: 'assets/img/portfolio2.jpg',
      title: 'Brand Design',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      isActive: false
    },
    {
      imgSrc: 'assets/img/portfolio3.jpg',
      title: 'Online Store',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      isActive: false
    },
  ];

  sliderPos = 0;

  get currentContent() {
    return this.sliderItemList[this.sliderPos];
  }

    // educationItemList = [
  //   { 
  //     title: 'Computer Engineer', 
  //     location: 'Peru - University', 
  //     years: '2009 - 2014', 
  //     decoration: {position: 'bottom',hasCircle: true, hasLine: true}
  //   },
  //   { 
  //     title: 'Computer Engineer', 
  //     location: 'Peru - University', 
  //     years: '2009 - 2014', 
  //     decoration: {position: 'top',hasCircle: true, hasLine: true}
  //   },
  //   { 
  //     title: 'Computer Engineer', 
  //     location: 'Peru - University', 
  //     years: '2009 - 2014', 
  //     decoration: {position: 'bottom',hasCircle: true, hasLine: false}
  //   },
  // ];

  constructor() {}

  sliderClicked(direction: string) {
    const length = this.sliderItemList.length;

    if (direction === 'forward') {
      const addedVal = this.sliderPos + 1;
      const exceedsLength = addedVal === length;
      exceedsLength ? 
        this.sliderPos = 0 : 
        this.sliderPos = addedVal;
    } else {
      const subVal = this.sliderPos - 1;
      const belowLength = subVal < 0;
      belowLength ? 
        this.sliderPos = (length-1) : 
        this.sliderPos = subVal;
    }
  }

}
