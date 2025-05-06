import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
}