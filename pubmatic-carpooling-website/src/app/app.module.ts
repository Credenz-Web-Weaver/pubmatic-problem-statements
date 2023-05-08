import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { RidesComponent } from './rides/rides.component';
import { DriversComponent } from './drivers/drivers.component';
import { PassengersComponent } from './passengers/passengers.component';
import { FooterComponent } from './footer/footer.component';
import { RideCardComponent } from './rides/ride-card/ride-card.component';

import { HomeComponent } from './home/home.component';
import { ReadmeComponent } from './readme/readme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    RidesComponent,
    DriversComponent,
    PassengersComponent,
    FooterComponent,
    RideCardComponent,
    HomeComponent,
    ReadmeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
