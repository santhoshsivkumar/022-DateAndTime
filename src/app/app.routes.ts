import { Routes } from '@angular/router';
import { CalculateAgeComponent } from './features/date-time-tools/calculate-age/calculate-age.component';
import { HomeComponent } from './features/home/home.component';
import { DaysBetweenComponent } from './features/date-time-tools/days-between/days-between.component';
import { CalculateDateComponent } from './features/date-time-tools/calculate-date/calculate-date.component';
import { WeeksBetweenComponent } from './features/date-time-tools/weeks-between/weeks-between.component';
import { MonthsBetweenComponent } from './features/date-time-tools/months-between/months-between.component';
import { HoursBetweenComponent } from './features/date-time-tools/hours-between/hours-between.component';

import { PasswordGeneratorComponent } from './features/utilities/password-generator/password-generator.component';
import { BMICalculatorComponent } from './features/utilities/bmi-calculator/bmi-calculator.component';
import { SimpleInterestComponent } from './features/math-finance-tools/simple-interest/simple-interest.component';
import { CompoundInterestComponent } from './features/math-finance-tools/compound-interest/compound-interest.component';
import { LoanEmiCalculatorComponent } from './features/math-finance-tools/loan-emi-calculator/loan-emi-calculator.component';
import { PercentageCalculatorComponent } from './features/math-finance-tools/percentage-calculator/percentage-calculator.component';
import { NumberBaseConverterComponent } from './features/utilities/number-base-converter/number-base-converter.component';

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
