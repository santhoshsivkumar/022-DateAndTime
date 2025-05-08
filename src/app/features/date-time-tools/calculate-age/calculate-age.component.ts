import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculate-age.component.html',
  styleUrls: ['./calculate-age.component.css'],
})
export class CalculateAgeComponent {
  birthDate: string = '';
  errorMessage: string | null = null;
  ageDetails: any = null;
  isLoading: boolean = false;

  calculateAge() {
    this.errorMessage = null;
    this.ageDetails = null;

    const today = new Date();
    const birthDate = new Date(this.birthDate);
    const ageInMillis = today.getTime() - birthDate.getTime();

    if (!this.birthDate) {
      this.errorMessage = 'Please select your birth date.';
      return;
    }

    if (ageInMillis < 0) {
      this.errorMessage = 'Birthdate cannot be in the future.';
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      const totalDays = Math.floor(ageInMillis / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365);
      const remainingDays = totalDays - years * 365;
      const months = Math.floor(remainingDays / 30);
      const days = remainingDays - months * 30;

      const totalWeeks = Math.floor(totalDays / 7);
      const remainingDaysInWeek = totalDays % 7;

      const totalHours = totalDays * 24;
      const totalMinutes = totalHours * 60;
      const totalSeconds = totalMinutes * 60;

      this.ageDetails = {
        years,
        months,
        days,
        totalMonths: years * 12 + months,
        remainingDays,
        totalWeeks,
        remainingDaysInWeek,
        totalDays,
        totalHours,
        totalMinutes,
        totalSeconds,
      };

      this.isLoading = false;
    }, 1000); // simulate loading for better UX
  }
}
