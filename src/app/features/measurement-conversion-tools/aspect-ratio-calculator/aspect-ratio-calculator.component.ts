import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aspect-ratio-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aspect-ratio-calculator.component.html',
  styleUrls: ['./aspect-ratio-calculator.component.css'],
})
export class AspectRatioCalculatorComponent {
  width: number | null = null;
  height: number | null = null;
  ratio: string = '';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  calculate() {
    this.errorMessage = '';
    this.breakdown = [];
    this.ratio = '';
    if (!this.width || !this.height || this.width <= 0 || this.height <= 0) {
      this.errorMessage = 'Please enter valid width and height.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      const gcd = (a: number, b: number): number =>
        b === 0 ? a : gcd(b, a % b);
      const divisor = gcd(this.width!, this.height!);
      const w = this.width! / divisor;
      const h = this.height! / divisor;
      this.ratio = `${w}:${h}`;
      this.breakdown = [
        `GCD of width and height: ${divisor}`,
        `Aspect ratio: ${w}:${h}`,
      ];
      this.isLoading = false;
    }, 200);
  }
}
