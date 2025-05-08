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
import { CompoundInterestComponent } from './features/compound-interest/compound-interest.component';
import { LoanEmiCalculatorComponent } from './features/loan-emi-calculator/loan-emi-calculator.component';
import { PercentageCalculatorComponent } from './features/percentage-calculator/percentage-calculator.component';
import { NumberBaseConverterComponent } from './features/number-base-converter/number-base-converter.component';

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
  { path: 'compound-interest', component: CompoundInterestComponent },
  { path: 'loan-emi-calculator', component: LoanEmiCalculatorComponent },
  { path: 'percentage-calculator', component: PercentageCalculatorComponent },
  { path: 'number-base-converter', component: NumberBaseConverterComponent },
];
