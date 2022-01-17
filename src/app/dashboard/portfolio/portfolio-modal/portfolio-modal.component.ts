import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {

  data: any;

  @Input() modalData:any; 

  // @Input('modalData') set modalData(value:any) {
  //   value.title = value.title.replace(' <br> ', ' ')
  //   console.log('value', value)
  //   //console.log('parsed', parsedValue);
  //   this.data = value;
  // }

  @Output() closeModalClicked = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit() {
    // this.modalData.title = this.modalData.title.replace(' <br> ', ' ');
    this.data = this.modalData;
  }

  closeModal() {
    this.closeModalClicked.emit(this.data);
  }

}
