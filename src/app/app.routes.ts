import { Routes } from '@angular/router';
import { CalculateAgeComponent } from './features/date-time-tools/calculate-age/calculate-age.component';
import { HomeComponent } from './features/home/home.component';
import { DaysBetweenComponent } from './features/date-time-tools/days-between/days-between.component';
import { CalculateDateComponent } from './features/date-time-tools/calculate-date/calculate-date.component';
import { WeeksBetweenComponent } from './features/date-time-tools/weeks-between/weeks-between.component';
import { MonthsBetweenComponent } from './features/date-time-tools/months-between/months-between.component';
import { HoursBetweenComponent } from './features/date-time-tools/hours-between/hours-between.component';
import { WorkdaysCalculatorComponent } from './features/date-time-tools/workdays-calculator/workdays-calculator.component';
import { LeapYearCheckerComponent } from './features/date-time-tools/leap-year-checker/leap-year-checker.component';
import { ZodiacSignFinderComponent } from './features/date-time-tools/zodiac-sign-finder/zodiac-sign-finder.component';
import { CountdownTimerComponent } from './features/date-time-tools/countdown-timer/countdown-timer.component';
import { TimezoneConverterComponent } from './features/date-time-tools/timezone-converter/timezone-converter.component';

import { PasswordGeneratorComponent } from './features/utilities/password-generator/password-generator.component';
import { BMICalculatorComponent } from './features/utilities/bmi-calculator/bmi-calculator.component';
import { SimpleInterestComponent } from './features/math-finance-tools/simple-interest/simple-interest.component';
import { CompoundInterestComponent } from './features/math-finance-tools/compound-interest/compound-interest.component';
import { LoanEmiCalculatorComponent } from './features/math-finance-tools/loan-emi-calculator/loan-emi-calculator.component';
import { PercentageCalculatorComponent } from './features/math-finance-tools/percentage-calculator/percentage-calculator.component';
import { NumberBaseConverterComponent } from './features/utilities/number-base-converter/number-base-converter.component';

import { UuidGeneratorComponent } from './features/security-generator-tools/uuid-generator/uuid-generator.component';
import { QrCodeGeneratorComponent } from './features/security-generator-tools/qr-code-generator/qr-code-generator.component';
import { Base64EncoderDecoderComponent } from './features/security-generator-tools/base64-encoder-decoder/base64-encoder-decoder.component';
import { HashGeneratorComponent } from './features/security-generator-tools/hash-generator/hash-generator.component';
import { TextEncryptionDecryptionComponent } from './features/security-generator-tools/text-encryption-decryption/text-encryption-decryption.component';

import { UnitConverterComponent } from './features/measurement-conversion-tools/unit-converter/unit-converter.component';
import { PixelToRemConverterComponent } from './features/measurement-conversion-tools/pixel-to-rem-converter/pixel-to-rem-converter.component';
import { AspectRatioCalculatorComponent } from './features/measurement-conversion-tools/aspect-ratio-calculator/aspect-ratio-calculator.component';
import { ScreenResolutionTesterComponent } from './features/measurement-conversion-tools/screen-resolution-tester/screen-resolution-tester.component';

import { TextCaseConverterComponent } from './features/text-formatting-tools/text-case-converter/text-case-converter.component';
import { WordCharacterCounterComponent } from './features/text-formatting-tools/word-character-counter/word-character-counter.component';
import { RemoveLinebreaksSpacesComponent } from './features/text-formatting-tools/remove-linebreaks-spaces/remove-linebreaks-spaces.component';
import { JsonFormatterValidatorComponent } from './features/text-formatting-tools/json-formatter-validator/json-formatter-validator.component';
import { CsvToJsonConverterComponent } from './features/text-formatting-tools/csv-to-json-converter/csv-to-json-converter.component';

import { LoremIpsumGeneratorComponent } from './features/miscellaneous-tools/lorem-ipsum-generator/lorem-ipsum-generator.component';
import { ColorPickerHexRgbComponent } from './features/miscellaneous-tools/color-picker-hex-rgb/color-picker-hex-rgb.component';
import { TimezoneClockComponent } from './features/miscellaneous-tools/timezone-clock/timezone-clock.component';
import { CustomCalendarGeneratorComponent } from './features/miscellaneous-tools/custom-calendar-generator/custom-calendar-generator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Updated to use HomeComponent
  { path: 'calculate-age', component: CalculateAgeComponent },
  { path: 'days-between', component: DaysBetweenComponent },
  { path: 'calculate-date', component: CalculateDateComponent },
  { path: 'weeks-between', component: WeeksBetweenComponent },
  { path: 'months-between', component: MonthsBetweenComponent },
  { path: 'hours-between', component: HoursBetweenComponent },
  { path: 'workdays-calculator', component: WorkdaysCalculatorComponent },
  { path: 'leap-year-checker', component: LeapYearCheckerComponent },
  { path: 'zodiac-sign-finder', component: ZodiacSignFinderComponent },
  { path: 'countdown-timer', component: CountdownTimerComponent },
  { path: 'timezone-converter', component: TimezoneConverterComponent },

  { path: 'password-generator', component: PasswordGeneratorComponent },
  { path: 'bmi-calculator', component: BMICalculatorComponent },
  { path: 'simple-interest', component: SimpleInterestComponent },
  { path: 'compound-interest', component: CompoundInterestComponent },
  { path: 'loan-emi-calculator', component: LoanEmiCalculatorComponent },
  { path: 'percentage-calculator', component: PercentageCalculatorComponent },
  { path: 'number-base-converter', component: NumberBaseConverterComponent },

  { path: 'uuid-generator', component: UuidGeneratorComponent },
  { path: 'qr-code-generator', component: QrCodeGeneratorComponent },
  { path: 'base64-encoder-decoder', component: Base64EncoderDecoderComponent },
  { path: 'hash-generator', component: HashGeneratorComponent },
  {
    path: 'text-encryption-decryption',
    component: TextEncryptionDecryptionComponent,
  },

  { path: 'unit-converter', component: UnitConverterComponent },
  { path: 'pixel-to-rem-converter', component: PixelToRemConverterComponent },
  {
    path: 'aspect-ratio-calculator',
    component: AspectRatioCalculatorComponent,
  },
  {
    path: 'screen-resolution-tester',
    component: ScreenResolutionTesterComponent,
  },

  { path: 'text-case-converter', component: TextCaseConverterComponent },
  { path: 'word-character-counter', component: WordCharacterCounterComponent },
  {
    path: 'remove-linebreaks-spaces',
    component: RemoveLinebreaksSpacesComponent,
  },
  {
    path: 'json-formatter-validator',
    component: JsonFormatterValidatorComponent,
  },
  { path: 'csv-to-json-converter', component: CsvToJsonConverterComponent },

  { path: 'lorem-ipsum-generator', component: LoremIpsumGeneratorComponent },
  { path: 'color-picker-hex-rgb', component: ColorPickerHexRgbComponent },
  { path: 'timezone-clock', component: TimezoneClockComponent },
  {
    path: 'custom-calendar-generator',
    component: CustomCalendarGeneratorComponent,
  },

  {
    path: 'text-formatting-tools/remove-linebreaks-spaces',
    loadComponent: () =>
      import(
        './features/text-formatting-tools/remove-linebreaks-spaces/remove-linebreaks-spaces.component'
      ).then((m) => m.RemoveLinebreaksSpacesComponent),
  },
  {
    path: 'text-formatting-tools/json-formatter-validator',
    loadComponent: () =>
      import(
        './features/text-formatting-tools/json-formatter-validator/json-formatter-validator.component'
      ).then((m) => m.JsonFormatterValidatorComponent),
  },
  {
    path: 'text-formatting-tools/csv-to-json-converter',
    loadComponent: () =>
      import(
        './features/text-formatting-tools/csv-to-json-converter/csv-to-json-converter.component'
      ).then((m) => m.CsvToJsonConverterComponent),
  },
  {
    path: 'miscellaneous-tools/lorem-ipsum-generator',
    loadComponent: () =>
      import(
        './features/miscellaneous-tools/lorem-ipsum-generator/lorem-ipsum-generator.component'
      ).then((m) => m.LoremIpsumGeneratorComponent),
  },
  {
    path: 'miscellaneous-tools/color-picker-hex-rgb',
    loadComponent: () =>
      import(
        './features/miscellaneous-tools/color-picker-hex-rgb/color-picker-hex-rgb.component'
      ).then((m) => m.ColorPickerHexRgbComponent),
  },
  {
    path: 'miscellaneous-tools/timezone-clock',
    loadComponent: () =>
      import(
        './features/miscellaneous-tools/timezone-clock/timezone-clock.component'
      ).then((m) => m.TimezoneClockComponent),
  },
  {
    path: 'miscellaneous-tools/custom-calendar-generator',
    loadComponent: () =>
      import(
        './features/miscellaneous-tools/custom-calendar-generator/custom-calendar-generator.component'
      ).then((m) => m.CustomCalendarGeneratorComponent),
  },
  {
    path: 'security-generator-tools/xml-base64-converter',
    loadComponent: () =>
      import(
        './features/security-generator-tools/xml-base64-converter/xml-base64-converter.component'
      ).then((m) => m.XmlBase64ConverterComponent),
  },
];
