import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-base-converter',
  templateUrl: './number-base-converter.component.html',
  styleUrls: ['./number-base-converter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class NumberBaseConverterComponent {
  inputNumber: string = '';
  inputBase: number = 10;
  outputBase: number = 2;
  convertedNumber: string | null = null;

  convertNumber() {
    try {
      const decimalValue = parseInt(this.inputNumber, this.inputBase);
      this.convertedNumber = decimalValue
        .toString(this.outputBase)
        .toUpperCase();
    } catch (error) {
      this.convertedNumber = 'Invalid Input';
    }
  }
}
