import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent {
  targetDate: string = '';
  intervalId: any = null;
  remaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null = null;
  errorMessage: string = '';
  isRunning = false;
  breakdown: string[] = [];

  startCountdown() {
    this.errorMessage = '';
    this.breakdown = [];
    if (!this.targetDate) {
      this.errorMessage = 'Please select a target date and time.';
      return;
    }
    const target = new Date(this.targetDate);
    if (isNaN(target.getTime()) || target < new Date()) {
      this.errorMessage = 'Please select a valid future date/time.';
      return;
    }
    this.isRunning = true;
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    const target = new Date(this.targetDate);
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      this.remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.breakdown = ['Countdown complete!'];
      this.stopCountdown();
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    this.remaining = { days, hours, minutes, seconds };
    this.breakdown = [
      `Target: ${target.toLocaleString()}`,
      `Now: ${now.toLocaleString()}`,
      `Difference: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
    ];
  }

  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  ngOnDestroy() {
    this.stopCountdown();
  }
}
