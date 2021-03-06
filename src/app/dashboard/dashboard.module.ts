import { TimelineComponent } from './experience/timeline/timeline.component';
import { ExperienceComponent } from './experience/experience.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModalComponent } from './portfolio/portfolio-modal/portfolio-modal.component';
import { UserDataService } from './user-data.service';
import { FadeInDirective } from './intersection.directive';

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
    PortfolioComponent,
    PortfolioModalComponent,
    FadeInDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserDataService],
  exports: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ExperienceComponent,
    TimelineComponent,
    PortfolioComponent,
    PortfolioModalComponent,
    FadeInDirective
  ],
  entryComponents: [
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ExperienceComponent,
    TimelineComponent,
    PortfolioComponent,
    PortfolioModalComponent,
    FadeInDirective
  ]
})
export class DashboardModule { }
