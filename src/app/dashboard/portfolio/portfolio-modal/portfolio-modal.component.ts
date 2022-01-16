import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent {

  data: any;

  @Input('modalData') set modalData(value:any) {
    this.data = value;
  }

  @Output() closeModalClicked = new EventEmitter<string>();
  
  constructor() {}

  closeModal() {
    this.closeModalClicked.emit(this.data);
  }

}
