import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-case-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-case-converter.component.html',
  styleUrls: ['./text-case-converter.component.css'],
})
export class TextCaseConverterComponent {
  input: string = '';
  output: string = '';
  mode: 'upper' | 'lower' | 'title' = 'upper';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  convert() {
    this.errorMessage = '';
    this.breakdown = [];
    this.output = '';
    if (!this.input) {
      this.errorMessage = 'Please enter text.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      if (this.mode === 'upper') {
        this.output = this.input.toUpperCase();
        this.breakdown = ['Converted to UPPERCASE.'];
      } else if (this.mode === 'lower') {
        this.output = this.input.toLowerCase();
        this.breakdown = ['Converted to lowercase.'];
      } else {
        this.output = this.input.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        this.breakdown = ['Converted to Title Case.'];
      }
      this.breakdown.push(`Input: ${this.input}`);
      this.breakdown.push(`Output: ${this.output}`);
      this.isLoading = false;
    }, 200);
  }
}
