import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hours-between',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hours-between.component.html',
  styleUrls: ['./hours-between.component.css'],
})
export class HoursBetweenComponent {
  startDateTime: string = '';
  endDateTime: string = '';
  hoursBetween: number | null = null;
  minutesBetween: number | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  calculateTimeBetween() {
    this.errorMessage = null;
    this.hoursBetween = null;
    this.minutesBetween = null;
    this.isLoading = true;

    if (!this.startDateTime || !this.endDateTime) {
      this.errorMessage = 'Please select both start and end datetime.';
      this.isLoading = false;
      return;
    }

    const start = new Date(this.startDateTime);
    const end = new Date(this.endDateTime);
    const timeDiff = Math.abs(end.getTime() - start.getTime());

    // Calculate time difference in hours and minutes
    this.hoursBetween = Math.floor(timeDiff / (1000 * 60 * 60));
    this.minutesBetween = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );

    this.isLoading = false;
  }
}
