import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-interest',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css'],
})
export class SimpleInterestComponent {
  principalAmount: number = 0;
  time: number = 0;
  rateOfInterest: number = 0;
  timeUnit: string = 'months'; // Default unit
  interestUnit: string = 'month'; // Default unit
  errorMessage: string | null = null;
  simpleInterestResult: { interest: number; totalAmount: number } | null = null;
  convertedTime: number = 0;
  isLoading: boolean = false;

  calculateSimpleInterest() {
    this.errorMessage = null;
    this.simpleInterestResult = null;

    if (
      this.principalAmount <= 0 ||
      this.time <= 0 ||
      this.rateOfInterest <= 0
    ) {
      this.errorMessage = 'Please enter valid positive numbers.';
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      this.convertedTime = this.convertTimeToYears(this.time, this.timeUnit);
      const adjustedRate = this.adjustRateOfInterest(
        this.rateOfInterest,
        this.interestUnit
      );

      const interest =
        (this.principalAmount * adjustedRate * this.convertedTime) / 100;
      const totalAmount = this.principalAmount + interest;

      this.simpleInterestResult = {
        interest: parseFloat(interest.toFixed(2)),
        totalAmount: parseFloat(totalAmount.toFixed(2)),
      };

      this.isLoading = false;
    }, 800);
  }

  convertTimeToYears(value: number, unit: string): number {
    switch (unit) {
      case 'months':
        return value / 12;
      case 'days':
        return value / 365;
      case 'minutes':
        return value / (365 * 24 * 60);
      case 'seconds':
        return value / (365 * 24 * 60 * 60);
      default:
        return value;
    }
  }

  adjustRateOfInterest(rate: number, unit: string): number {
    switch (unit) {
      case 'month':
        return rate * 12;
      case 'day':
        return rate * 365;
      case 'minute':
        return rate * 525600;
      case 'second':
        return rate * 31536000;
      default:
        return rate;
    }
  }

  convertToAnnual(rate: number, unit: string): number {
    switch (unit) {
      case 'year':
        return rate;
      case 'month':
        return rate * 12;
      case 'day':
        return rate * 365;
      case 'minute':
        return rate * 525600;
      case 'second':
        return rate * 31536000;
      default:
        return rate;
    }
  }

  getConvertedInterestRates() {
    const annualRate = this.convertToAnnual(
      this.rateOfInterest,
      this.interestUnit
    );
    const originalUnit = this.interestUnit;

    const rates = [
      { label: 'year', value: `${annualRate.toFixed(2)}% per year` },
      { label: 'month', value: `${(annualRate / 12).toFixed(2)}% per month` },
      { label: 'day', value: `${(annualRate / 365).toFixed(4)}% per day` },
      { label: 'hour', value: `${(annualRate / 8760).toFixed(6)}% per hour` },
      {
        label: 'minute',
        value: `${(annualRate / 525600).toFixed(8)}% per minute`,
      },
      {
        label: 'second',
        value: `${(annualRate / 31536000).toFixed(10)}% per second`,
      },
    ];

    return rates.filter((r) => r.label !== originalUnit);
  }

  getConvertedInterestBreakdown() {
    const units = ['year', 'month', 'day', 'hour'];
    const annual = this.convertToAnnual(this.rateOfInterest, this.interestUnit);

    return units.map((unit) => {
      const factorMap: Record<string, number> = {
        year: 1,
        month: 12,
        day: 365,
        hour: 8760,
      };

      const factor = factorMap[unit];
      const rate = annual / factor;
      const interest = this.principalAmount * (rate / 100) * this.convertedTime;
      const total = this.principalAmount + interest;

      return {
        unit,
        rate: `${rate.toFixed(5)}% per ${unit}`,
        interest: interest.toFixed(5),
        total: total.toFixed(5),
      };
    });
  }
}
