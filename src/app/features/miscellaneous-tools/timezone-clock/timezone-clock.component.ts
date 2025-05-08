import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timezone-clock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timezone-clock.component.html',
  styleUrls: ['./timezone-clock.component.css'],
})
export class TimezoneClockComponent implements OnInit, OnDestroy {
  timezones = [
    { label: 'UTC', value: 'UTC' },
    { label: 'New York (EST)', value: 'America/New_York' },
    { label: 'London (GMT)', value: 'Europe/London' },
    { label: 'Berlin (CET)', value: 'Europe/Berlin' },
    { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
    { label: 'Sydney (AEST)', value: 'Australia/Sydney' },
  ];
  selectedTz = 'UTC';
  currentTime = '';
  timer: any;
  breakdown: string[] = [];

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    try {
      const now = new Date();
      this.currentTime = now.toLocaleString('en-US', {
        timeZone: this.selectedTz,
      });
      this.breakdown = [
        `Selected timezone: ${this.selectedTz}`,
        `Current time: ${this.currentTime}`,
        'Uses JavaScript toLocaleString with timezone.',
      ];
    } catch {
      this.currentTime = 'Invalid timezone';
      this.breakdown = ['Invalid timezone selected.'];
    }
  }

  onTzChange() {
    this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
