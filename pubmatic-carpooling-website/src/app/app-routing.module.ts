import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RidesComponent } from './rides/rides.component';
import { DriversComponent } from './drivers/drivers.component';
import { PassengersComponent } from './passengers/passengers.component';
import { ReadmeComponent } from './readme/readme.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'passengers', component: PassengersComponent },
  { path: 'readme', component: ReadmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


