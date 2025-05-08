import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-days-between',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './days-between.component.html',
  styleUrls: ['./days-between.component.css'],
})
export class DaysBetweenComponent {
  startDate: string = '';
  endDate: string = '';
  daysBetween: number | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  calculateDaysBetween() {
    this.errorMessage = null;
    this.daysBetween = null;
    this.isLoading = true;

    if (!this.startDate || !this.endDate) {
      this.errorMessage =
        'Please select both dates to calculate the difference.';
      this.isLoading = false;
      return;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    this.daysBetween = Math.floor(timeDiff / (1000 * 3600 * 24));

    this.isLoading = false;
  }
}
