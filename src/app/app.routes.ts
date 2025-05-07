import { Routes } from '@angular/router';
import { CalculateAgeComponent } from './features/calculate-age/calculate-age.component';
import { HomeComponent } from './features/home/home.component';
import { DaysBetweenComponent } from './features/days-between/days-between.component';
import { CalculateDateComponent } from './features/calculate-date/calculate-date.component';
import { WeeksBetweenComponent } from './features/weeks-between/weeks-between.component';
import { MonthsBetweenComponent } from './features/months-between/months-between.component';
import { HoursBetweenComponent } from './features/hours-between/hours-between.component';

import { PasswordGeneratorComponent } from './features/password-generator/password-generator.component';
import { BMICalculatorComponent } from './features/bmi-calculator/bmi-calculator.component';
import { SimpleInterestComponent } from './features/simple-interest/simple-interest.component';
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Updated to use HomeComponent
  { path: 'calculate-age', component: CalculateAgeComponent },
  { path: 'days-between', component: DaysBetweenComponent },
  { path: 'calculate-date', component: CalculateDateComponent },
  { path: 'weeks-between', component: WeeksBetweenComponent },
  { path: 'months-between', component: MonthsBetweenComponent },
  { path: 'hours-between', component: HoursBetweenComponent },
  { path: 'password-generator', component: PasswordGeneratorComponent },
  { path: 'bmi-calculator', component: BMICalculatorComponent },
  { path: 'simple-interest', component: SimpleInterestComponent },
];
