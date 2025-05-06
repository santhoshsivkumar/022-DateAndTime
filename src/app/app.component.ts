import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureCardComponent } from './shared/feature-card/feature-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FeatureCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  features = [
    { title: 'Calculate Age', route: '/calculate-age' },
    { title: 'Days Between Dates', route: '/days-between' }
  ];
}
