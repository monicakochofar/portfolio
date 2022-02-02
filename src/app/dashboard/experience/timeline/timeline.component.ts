import { UserDataService } from './../../user-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() itemList: any;
  
  constructor(private userData: UserDataService) {}

  ngOnInit() {
    const locationGroupList = this.groupSameLocation(this.itemList);
    const newItemList = this.addLinestoList(locationGroupList, this.itemList);
    this.itemList = newItemList;
  }

  groupSameLocation(itemList:any) {
    // group titles according to location
    const result = itemList.reduce((prevVal, currVal) => {
      prevVal[currVal.location] = prevVal[currVal.location] || [];
      prevVal[currVal.location].push(currVal.title);
      return prevVal;
    }, {});
    return result;
  }

  addLinestoList(locationGroupList, itemList) {
    // determine whether we need to add a connecting line between the roles
    itemList.forEach(item => {
      item.hasLine = locationGroupList[item.location].length > 1;
      const index = locationGroupList[item.location].indexOf(item.title);
      locationGroupList[item.location].splice(index, 1);
    });
    return itemList;
  }

}
