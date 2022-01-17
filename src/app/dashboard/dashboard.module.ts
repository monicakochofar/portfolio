import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './qualification/timeline/timeline.component';
import { ExperienceComponent } from './qualification/experience.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModalComponent } from './portfolio/portfolio-modal/portfolio-modal.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ExperienceComponent,
    TimelineComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ExperienceComponent,
    TimelineComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioModalComponent
  ],
  entryComponents: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ExperienceComponent,
    TimelineComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioModalComponent
  ]
})
export class DashboardModule { }
