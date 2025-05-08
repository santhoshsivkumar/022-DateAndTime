import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workdays-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workdays-calculator.component.html',
  styleUrls: ['./workdays-calculator.component.css'],
})
export class WorkdaysCalculatorComponent {
  startDate: string = '';
  endDate: string = '';
  holidays: string = '';
  result: number | null = null;
  breakdown: string[] = [];
  errorMessage: string = '';
  isLoading = false;

  calculateWorkdays() {
    this.errorMessage = '';
    this.result = null;
    this.breakdown = [];
    if (!this.startDate || !this.endDate) {
      this.errorMessage = 'Please enter both start and end dates.';
      return;
    }
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      this.errorMessage = 'Invalid date range.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      let count = 0;
      let current = new Date(start);
      const holidaysArr = this.holidays
        .split(',')
        .map((d) => d.trim())
        .filter((d) => d)
        .map((d) => new Date(d).toDateString());
      while (current <= end) {
        const day = current.getDay();
        const isWeekend = day === 0 || day === 6;
        const isHoliday = holidaysArr.includes(current.toDateString());
        if (!isWeekend && !isHoliday) {
          count++;
          this.breakdown.push(
            `${current.toDateString()} - Workday${
              isHoliday ? ' (Holiday)' : ''
            }`
          );
        } else {
          this.breakdown.push(
            `${current.toDateString()} - ${isWeekend ? 'Weekend' : 'Holiday'}`
          );
        }
        current.setDate(current.getDate() + 1);
      }
      this.result = count;
      this.isLoading = false;
    }, 500);
  }
}
