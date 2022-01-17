import { ScrollListenersService } from './scroll-listeners.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [ScrollListenersService],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
