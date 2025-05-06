import { Routes } from '@angular/router';
import { CalculateAgeComponent } from './features/calculate-age/calculate-age.component';
import { DaysBetweenComponent } from './features/days-between/days-between.component';

export const routes: Routes = [
  { path: '', redirectTo: 'calculate-age', pathMatch: 'full' },
  { path: 'calculate-age', component: CalculateAgeComponent },
  { path: 'days-between', component: DaysBetweenComponent }
];
