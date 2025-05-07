import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this import
import { GoBackComponent } from '../../shared/go-back/go-back.component';
@Component({
  selector: 'app-calculate-age',
  standalone: true,
  imports: [CommonModule, FormsModule,GoBackComponent], // Add FormsModule and CommonModule here
  templateUrl: './calculate-age.component.html',
  styleUrls: ['./calculate-age.component.css']
})
export class CalculateAgeComponent {
  birthDate: string = '';
  ageDetails: any = null;
  errorMessage: string = '';

  calculateAge() {
    if (!this.birthDate) {
      this.errorMessage = 'Please enter a valid birth date.';
      this.ageDetails = null;
      return;
    }

    const currentDate = new Date();
    const birthDate = new Date(this.birthDate);

    if (birthDate > currentDate) {
      this.errorMessage = 'Birth date cannot be in the future.';
      this.ageDetails = null;
      return;
    }

    this.errorMessage = '';
    const years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    const days = currentDate.getDate() - birthDate.getDate();

    let adjustedYears = years;
    let adjustedMonths = months;
    let adjustedDays = days;

    if (adjustedDays < 0) {
      adjustedMonths -= 1;
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      adjustedDays += previousMonth.getDate();
    }

    if (adjustedMonths < 0) {
      adjustedYears -= 1;
      adjustedMonths += 12;
    }

    const totalMonths = adjustedYears * 12 + adjustedMonths;
    const totalDays = Math.floor((currentDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysInWeek = totalDays % 7;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    this.ageDetails = {
      years: adjustedYears,
      months: adjustedMonths,
      days: adjustedDays,
      totalMonths,
      remainingDays: adjustedDays,
      totalWeeks,
      remainingDaysInWeek,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds
    };
  }

  previewCustomTheme(theme: any) {
    document.documentElement.style.setProperty('--header-color', theme.headerColor);
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--font-color', theme.fontColor);
  }
}
