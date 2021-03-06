import { UserDataService } from './../user-data.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  itemList = this.userData.getPortfolioList();
  
  constructor(private userData: UserDataService) {}

  closeModal(event:any) {
    const item = this.itemList.find(el => el.title1 === event.title1);
    item && (item.isActive = false);
  }

}
