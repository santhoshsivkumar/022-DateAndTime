import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leap-year-checker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leap-year-checker.component.html',
  styleUrls: ['./leap-year-checker.component.css'],
})
export class LeapYearCheckerComponent {
  year: string = '';
  result: string = '';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  checkLeapYear() {
    this.errorMessage = '';
    this.result = '';
    this.breakdown = [];
    if (!this.year) {
      this.errorMessage = 'Please enter a year.';
      return;
    }
    const y = parseInt(this.year, 10);
    if (isNaN(y) || y < 0) {
      this.errorMessage = 'Invalid year.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      if (y % 4 !== 0) {
        this.result = `${y} is NOT a leap year.`;
        this.breakdown.push(`${y} is not divisible by 4.`);
      } else if (y % 100 !== 0) {
        this.result = `${y} IS a leap year.`;
        this.breakdown.push(`${y} is divisible by 4 but not by 100.`);
      } else if (y % 400 === 0) {
        this.result = `${y} IS a leap year.`;
        this.breakdown.push(`${y} is divisible by 100 and by 400.`);
      } else {
        this.result = `${y} is NOT a leap year.`;
        this.breakdown.push(`${y} is divisible by 100 but not by 400.`);
      }
      this.isLoading = false;
    }, 400);
  }
}
