import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './qualification/timeline/timeline.component';
import { QualificationComponent } from './qualification/qualification.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    IntroductionComponent,
    AboutComponent,
    DashboardComponent,
    QualificationComponent,
    TimelineComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [],
  exports: [
    IntroductionComponent,
    AboutComponent,
    DashboardComponent,
    QualificationComponent,
    TimelineComponent,
    SkillsComponent
  ],
  entryComponents: [
    IntroductionComponent,
    AboutComponent,
    DashboardComponent,
    QualificationComponent,
    TimelineComponent,
    SkillsComponent
  ]
})
export class DashboardModule { }
