import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
