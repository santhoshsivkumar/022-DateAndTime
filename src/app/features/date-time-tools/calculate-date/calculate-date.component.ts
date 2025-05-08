import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-date',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.css'],
})
export class CalculateDateComponent {
  calculatedDate: string | null = null;
  baseDate: string = '';
  daysToAdd: number | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  calculateDate() {
    this.errorMessage = null;
    this.calculatedDate = null;

    if (!this.baseDate || this.daysToAdd === null || isNaN(this.daysToAdd)) {
      this.errorMessage =
        'Please provide a valid base date and number of days.';
      return;
    }

    const base = new Date(this.baseDate);
    if (isNaN(base.getTime())) {
      this.errorMessage = 'Invalid base date.';
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      base.setDate(base.getDate() + this.daysToAdd!);
      this.calculatedDate = base.toDateString();
      this.isLoading = false;
    }, 1000);
  }
}
