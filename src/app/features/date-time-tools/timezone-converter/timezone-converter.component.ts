import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TimezoneOption {
  label: string;
  value: string;
  offset: number; // in minutes
}

@Component({
  selector: 'app-timezone-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timezone-converter.component.html',
  styleUrls: ['./timezone-converter.component.css'],
})
export class TimezoneConverterComponent {
  dateTime: string = '';
  fromTz: string = 'UTC';
  toTz: string = 'UTC';
  result: string = '';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  timezones: TimezoneOption[] = [
    { label: 'UTC', value: 'UTC', offset: 0 },
    { label: 'US Eastern (UTC-5)', value: 'America/New_York', offset: -300 },
    { label: 'US Central (UTC-6)', value: 'America/Chicago', offset: -360 },
    { label: 'US Mountain (UTC-7)', value: 'America/Denver', offset: -420 },
    { label: 'US Pacific (UTC-8)', value: 'America/Los_Angeles', offset: -480 },
    { label: 'India (UTC+5:30)', value: 'Asia/Kolkata', offset: 330 },
    { label: 'Central Europe (UTC+1)', value: 'Europe/Berlin', offset: 60 },
    { label: 'China (UTC+8)', value: 'Asia/Shanghai', offset: 480 },
    { label: 'Japan (UTC+9)', value: 'Asia/Tokyo', offset: 540 },
    {
      label: 'Australia Eastern (UTC+10)',
      value: 'Australia/Sydney',
      offset: 600,
    },
  ];

  convertTimezone() {
    this.errorMessage = '';
    this.result = '';
    this.breakdown = [];
    if (!this.dateTime) {
      this.errorMessage = 'Please enter a date and time.';
      return;
    }
    if (this.fromTz === this.toTz) {
      this.errorMessage = 'Please select different time zones.';
      return;
    }
    const from =
      this.timezones.find((tz) => tz.value === this.fromTz) ||
      this.timezones[0];
    const to =
      this.timezones.find((tz) => tz.value === this.toTz) || this.timezones[0];
    const inputDate = new Date(this.dateTime);
    if (isNaN(inputDate.getTime())) {
      this.errorMessage = 'Invalid date/time.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      // Convert input date to UTC, then to target timezone
      const utc = new Date(inputDate.getTime() - from.offset * 60000);
      const target = new Date(utc.getTime() + to.offset * 60000);
      this.result =
        target.toLocaleString('en-US', { timeZone: 'UTC' }) + ` (${to.label})`;
      this.breakdown = [
        `Input: ${inputDate.toLocaleString()} (${from.label})`,
        `Convert to UTC: ${utc.toLocaleString()} (UTC)`,
        `Convert to ${to.label}: ${target.toLocaleString()} (${to.label})`,
      ];
      this.isLoading = false;
    }, 400);
  }
}
