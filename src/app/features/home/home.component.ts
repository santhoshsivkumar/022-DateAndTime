import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../shared/feature-card/feature-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [FeatureCardComponent, CommonModule],
    standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    { title: 'Calculate Age', route: '/calculate-age' },
    { title: 'Days Between Dates', route: '/days-between' },
  ];

  headerColor: string = '#ffffff';
  backgroundColor: string = '#f0f0f0';
  fontColor: string = '#000000';

  previewCustomTheme(theme: any) {
    document.documentElement.style.setProperty('--header-color', theme.headerColor);
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--font-color', theme.fontColor);
  }
}