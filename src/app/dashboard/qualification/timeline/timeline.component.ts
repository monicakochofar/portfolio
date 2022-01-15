import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  template: `
  <div class="timeline data" *ngFor="let item of itemList">
    <ng-container 
      *ngTemplateOutlet="item.decoration.position === 'top' ? linecircle : null;
      context: { 
        hasLine: item.decoration.hasLine, 
        hasCircle: item.decoration.hasCircle,
        position: item.decoration.position
      }">
    </ng-container>
    <ng-container 
      *ngTemplateOutlet="details; 
      context: { 
        title: item.title, 
        location: item.location, 
        years: item.years 
      }">
    </ng-container>
    <ng-container 
      *ngTemplateOutlet="item.decoration.position === 'bottom' ? linecircle : null;
      context: { 
        hasLine: item.decoration.hasLine, 
        hasCircle: item.decoration.hasCircle,
        position: item.decoration.position
      }">
    </ng-container>
  </div>

  <ng-template #details let-title="title" let-location="location" let-years="years">
    <div>
      <h3 class="title">{{ title }}</h3>
      <span class="subtitle">{{ location }}</span>
      <div class="calendar">
        <i class="uil uil-calendar-alt"></i>
        {{ years }}
      </div>
    </div>
  </ng-template>

  <ng-template #linecircle let-line="hasLine" let-circle="hasCircle" let-position="position">
    <div *ngIf="position === 'top'"></div>
    <div>
      <span class="rounder" *ngIf="circle"></span>
      <span class="line" *ngIf="line"></span>
    </div>
  </ng-template>
  `,
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input() itemList: any;
  
  constructor() {}

}
