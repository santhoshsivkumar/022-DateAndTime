import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weeks-between',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weeks-between.component.html',
  styleUrls: ['./weeks-between.component.css'],
})
export class WeeksBetweenComponent {
  startDate: string = '';
  endDate: string = '';
  weeksBetween: number | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  calculateWeeksBetween() {
    this.errorMessage = null;
    this.weeksBetween = null;
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
    this.weeksBetween = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));

    this.isLoading = false;
  }
}
