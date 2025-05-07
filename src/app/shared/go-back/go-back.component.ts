import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent {
  @Input() label: string = 'Go Back'; // Allow customization of the button label

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
