import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-months-between',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './months-between.component.html',
  styleUrls: ['./months-between.component.css'],
})
export class MonthsBetweenComponent {
  startDate: string = '';
  endDate: string = '';
  monthsBetween: number | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  calculateMonthsBetween() {
    this.errorMessage = null;
    this.monthsBetween = null;
    this.isLoading = true;

    if (!this.startDate || !this.endDate) {
      this.errorMessage =
        'Please select both dates to calculate the difference.';
      this.isLoading = false;
      return;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();
    this.monthsBetween = yearsDiff * 12 + monthsDiff;

    this.isLoading = false;
  }
}
