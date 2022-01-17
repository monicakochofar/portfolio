import { Component} from '@angular/core';

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
      title1: 'Ui/Ux',
      title2: 'Designer',
      portfolio: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interactions.',
        'I position your company brand.'
    ]},
    { 
      isActive: false,
      icon: 'uil-arrow',
      title1: 'Front-End',
      title2: 'Developer',
      portfolio: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interactions.',
        'I position your company brand.'
    ]},
    { 
      isActive: false,
      icon: 'uil-pen',
      title1: 'Branding',
      title2: 'Designer',
      portfolio: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interactions.',
        'I position your company brand.'
    ]}
  ];
  
  constructor() {}

  closeModal(event:any) {
    const item = this.itemList.find(el => el.title1 === event.title1);
    item && (item.isActive = false);
  }

}
