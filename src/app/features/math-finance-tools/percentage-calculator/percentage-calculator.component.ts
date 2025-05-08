import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-percentage-calculator',
  templateUrl: './percentage-calculator.component.html',
  styleUrls: ['./percentage-calculator.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PercentageCalculatorComponent {
  baseValue: number = 0;
  percentage: number = 0;
  result: number | null = null;

  calculatePercentage() {
    this.result = parseFloat(
      ((this.baseValue * this.percentage) / 100).toFixed(2)
    );
  }
}
