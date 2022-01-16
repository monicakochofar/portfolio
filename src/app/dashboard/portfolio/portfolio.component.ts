import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  itemList = [
    { 
      isActive: false,
      icon: 'uil-web-grid',
      title: 'Ui/Ux <br> Designer',
      services: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interactions.',
        'I position your company brand.'
    ]},
    { 
      isActive: false,
      icon: 'uil-arrow',
      title: 'Frontend <br> Developer',
      services: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interactions.',
        'I position your company brand.'
    ]},
    { 
      isActive: false,
      icon: 'uil-pen',
      title: 'Branding <br> Designer',
      services: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interactions.',
        'I position your company brand.'
    ]}
  ];
  
  constructor() {}

  closeModal(event:any) {
    const item = this.itemList.find(el => el.title === event.title);
    item && (item.isActive = false);
  }

}
