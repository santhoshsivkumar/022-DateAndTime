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
