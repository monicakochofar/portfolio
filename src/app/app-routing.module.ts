import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {
    path: '', 
    loadChildren:() => 
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: '**', component: ErrorComponent}
]

//TODO: check routing
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
  scrollOffset: [0,65]
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
