import { Routes } from '@angular/router';
import { CalculateAgeComponent } from './features/calculate-age/calculate-age.component';
import { HomeComponent } from './features/home/home.component';
import { DaysBetweenComponent } from './features/days-between/days-between.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Updated to use HomeComponent
  { path: 'calculate-age', component: CalculateAgeComponent },
  { path: 'days-between', component: DaysBetweenComponent }
];
