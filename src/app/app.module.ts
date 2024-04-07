import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviehomeModule } from './moviehome/show.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MoviehomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
