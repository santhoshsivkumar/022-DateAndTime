import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-emi-calculator',
  templateUrl: './loan-emi-calculator.component.html',
  styleUrls: ['./loan-emi-calculator.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoanEmiCalculatorComponent {
  loanAmount: number = 0;
  annualInterestRate: number = 0;
  loanTenure: number = 0;
  emiResult: {
    emi: number;
    totalPayment: number;
    totalInterest: number;
  } | null = null;

  calculateEMI() {
    const monthlyRate = this.annualInterestRate / 12 / 100;
    const tenureInMonths = this.loanTenure * 12;
    const emi =
      (this.loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, tenureInMonths)) /
      (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    const totalPayment = emi * tenureInMonths;
    const totalInterest = totalPayment - this.loanAmount;

    this.emiResult = {
      emi: parseFloat(emi.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    };
  }
}
