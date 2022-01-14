import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    IntroductionComponent,
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule
  ],
  providers: [],
  exports: [
    IntroductionComponent,
    AboutComponent,
    DashboardComponent
  ],
  entryComponents: [
    IntroductionComponent,
    AboutComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
