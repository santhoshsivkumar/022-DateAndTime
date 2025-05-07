import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
})
export class BMICalculatorComponent {
  weight: number | null = null;
  height: number | null = null;
  bmiResult: number | null = null;
  errorMessage: string | null = null;

  calculateBMI() {
    this.errorMessage = null;
    this.bmiResult = null;

    if (!this.weight || !this.height) {
      this.errorMessage = 'Please enter both weight and height.';
      return;
    }

    if (this.height <= 0 || this.weight <= 0) {
      this.errorMessage = 'Weight and height must be positive numbers.';
      return;
    }

    // BMI formula: BMI = weight(kg) / height(m)^2
    const heightInMeters = this.height / 100;
    this.bmiResult = this.weight / (heightInMeters * heightInMeters);
  }
}
