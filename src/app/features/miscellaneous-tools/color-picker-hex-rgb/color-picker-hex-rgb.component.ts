import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

function hexToRgb(hex: string): string {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((x) => x + x)
      .join('');
  }
  if (hex.length !== 6) return '';
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

@Component({
  selector: 'app-color-picker-hex-rgb',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-picker-hex-rgb.component.html',
  styleUrls: ['./color-picker-hex-rgb.component.css'],
})
export class ColorPickerHexRgbComponent {
  hex = '#3498db';
  rgb = '';
  breakdown: string[] = [];

  copyOutput() {
    if (navigator && navigator.clipboard && this.rgb) {
      navigator.clipboard.writeText(this.rgb);
    }
  }

  convert() {
    this.rgb = hexToRgb(this.hex);
    this.breakdown = [
      `Input HEX: ${this.hex}`,
      `Output RGB: ${this.rgb}`,
      'HEX is a base-16 color code, RGB is Red-Green-Blue values.',
    ];
  }
}
