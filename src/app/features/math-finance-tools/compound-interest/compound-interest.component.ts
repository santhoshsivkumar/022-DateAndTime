import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CompoundInterestComponent {
  principalAmount: number = 0;
  rateOfInterest: number = 0;
  time: number = 0;
  compoundFrequency: number = 1;
  compoundInterestResult: { interest: number; totalAmount: number } | null =
    null;

  calculateCompoundInterest() {
    const rate = this.rateOfInterest / 100;
    const totalAmount =
      this.principalAmount *
      Math.pow(
        1 + rate / this.compoundFrequency,
        this.compoundFrequency * this.time
      );
    const interest = totalAmount - this.principalAmount;

    this.compoundInterestResult = {
      interest: parseFloat(interest.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
    };
  }
}
