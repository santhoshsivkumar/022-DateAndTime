import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() route: string = '';

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
