import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../shared/feature-card/feature-card.component';
import { CommonModule } from '@angular/common';

interface Feature {
  title: string;
  route: string;
  section: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeatureCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  features: Feature[] = [
    {
      title: 'Calculate Age',
      route: '/calculate-age',
      section: 'Date & Time Tools',
    },
    {
      title: 'Calculate Days Between Two Dates',
      route: '/days-between',
      section: 'Date & Time Tools',
    },
    {
      title: 'Add or Subtract Days from a Date',
      route: '/calculate-date',
      section: 'Date & Time Tools',
    },
    {
      title: 'Calculate Weeks Between Two Dates',
      route: '/weeks-between',
      section: 'Date & Time Tools',
    },
    {
      title: 'Calculate Months Between Two Dates',
      route: '/months-between',
      section: 'Date & Time Tools',
    },
    {
      title: 'Calculate Hours Between Two Dates',
      route: '/hours-between',
      section: 'Date & Time Tools',
    },
    {
      title: 'Workdays (Business Days) Calculator',
      route: '/workdays-calculator',
      section: 'Date & Time Tools',
    },
    {
      title: 'Leap Year Checker',
      route: '/leap-year-checker',
      section: 'Date & Time Tools',
    },
    {
      title: 'Zodiac Sign Finder',
      route: '/zodiac-sign-finder',
      section: 'Date & Time Tools',
    },
    {
      title: 'Countdown Timer',
      route: '/countdown-timer',
      section: 'Date & Time Tools',
    },
    {
      title: 'Time Zone Converter',
      route: '/timezone-converter',
      section: 'Date & Time Tools',
    },
    {
      title: 'Random Password Generator',
      route: '/password-generator',
      section: 'Utilities',
    },
    { title: 'BMI Calculator', route: '/bmi-calculator', section: 'Utilities' },
    {
      title: 'Simple Interest Calculator',
      route: '/simple-interest',
      section: 'Math & Finance Tools',
    },
    {
      title: 'Compound Interest Calculator',
      route: '/compound-interest',
      section: 'Math & Finance Tools',
    },
    {
      title: 'Loan EMI Calculator',
      route: '/loan-emi-calculator',
      section: 'Math & Finance Tools',
    },
    {
      title: 'Percentage Calculator',
      route: '/percentage-calculator',
      section: 'Math & Finance Tools',
    },
    {
      title: 'Number Base Converter',
      route: '/number-base-converter',
      section: 'Utilities',
    },
    {
      title: 'UUID Generator',
      route: '/uuid-generator',
      section: 'Security & Generator Tools',
    },
    {
      title: 'QR Code Generator',
      route: '/qr-code-generator',
      section: 'Security & Generator Tools',
    },
    {
      title: 'Base64 Encoder/Decoder',
      route: '/base64-encoder-decoder',
      section: 'Security & Generator Tools',
    },
    {
      title: 'Hash Generator',
      route: '/hash-generator',
      section: 'Security & Generator Tools',
    },
    {
      title: 'Text Encryption/Decryption',
      route: '/text-encryption-decryption',
      section: 'Security & Generator Tools',
    },
    {
      title: 'XML ⇄ Base64 Converter',
      route: '/security-generator-tools/xml-base64-converter',
      section: 'Security & Generator Tools',
    },
    {
      title: 'Unit Converter',
      route: '/unit-converter',
      section: 'Measurement & Conversion Tools',
    },
    {
      title: 'Pixel to Rem Converter',
      route: '/pixel-to-rem-converter',
      section: 'Measurement & Conversion Tools',
    },
    {
      title: 'Aspect Ratio Calculator',
      route: '/aspect-ratio-calculator',
      section: 'Measurement & Conversion Tools',
    },
    {
      title: 'Screen Resolution Tester',
      route: '/screen-resolution-tester',
      section: 'Measurement & Conversion Tools',
    },
    {
      title: 'Text Case Converter',
      route: '/text-case-converter',
      section: 'Text & Formatting Tools',
    },
    {
      title: 'Word/Character Counter',
      route: '/word-character-counter',
      section: 'Text & Formatting Tools',
    },
    {
      title: 'Remove Line Breaks/Spaces',
      route: '/remove-linebreaks-spaces',
      section: 'Text & Formatting Tools',
    },
    {
      title: 'JSON Formatter & Validator',
      route: '/json-formatter-validator',
      section: 'Text & Formatting Tools',
    },
    {
      title: 'CSV to JSON Converter',
      route: '/csv-to-json-converter',
      section: 'Text & Formatting Tools',
    },
    {
      title: 'Lorem Ipsum Generator',
      route: '/lorem-ipsum-generator',
      section: 'Miscellaneous Tools',
    },
    {
      title: 'Color Picker & HEX to RGB Converter',
      route: '/color-picker-hex-rgb',
      section: 'Miscellaneous Tools',
    },
    {
      title: 'Timezone Clock',
      route: '/timezone-clock',
      section: 'Miscellaneous Tools',
    },
    {
      title: 'Custom Calendar Generator',
      route: '/custom-calendar-generator',
      section: 'Miscellaneous Tools',
    },
  ];

  get groupedFeatures(): { [section: string]: Feature[] } {
    return this.features.reduce(
      (acc: { [section: string]: Feature[] }, feature: Feature) => {
        acc[feature.section] = acc[feature.section] || [];
        acc[feature.section].push(feature);
        return acc;
      },
      {}
    );
  }
}
