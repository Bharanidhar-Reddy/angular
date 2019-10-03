import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HerodComponent } from './herod/herod.component';
import { HeroaComponent } from './heroa/heroa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerodComponent,
    HeroaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
