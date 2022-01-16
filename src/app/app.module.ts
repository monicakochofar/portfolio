import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
