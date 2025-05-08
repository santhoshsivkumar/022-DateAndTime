import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pixel-to-rem-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pixel-to-rem-converter.component.html',
  styleUrls: ['./pixel-to-rem-converter.component.css'],
})
export class PixelToRemConverterComponent {
  px: number | null = null;
  root: number = 16;
  rem: number | null = null;
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  convert() {
    this.errorMessage = '';
    this.breakdown = [];
    this.rem = null;
    if (this.px === null || isNaN(this.px) || this.px < 0) {
      this.errorMessage = 'Please enter a valid pixel value.';
      return;
    }
    if (!this.root || isNaN(this.root) || this.root <= 0) {
      this.errorMessage = 'Please enter a valid root font size.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.rem = this.px! / this.root;
      this.breakdown = [
        `Formula: rem = px / root-font-size`,
        `Input px: ${this.px}`,
        `Root font size: ${this.root}`,
        `Result: ${this.rem} rem`,
      ];
      this.isLoading = false;
    }, 200);
  }
}
