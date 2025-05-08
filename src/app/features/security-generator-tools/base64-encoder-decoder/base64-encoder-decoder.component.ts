import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base64-encoder-decoder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './base64-encoder-decoder.component.html',
  styleUrls: ['./base64-encoder-decoder.component.css'],
})
export class Base64EncoderDecoderComponent {
  input: string = '';
  output: string = '';
  mode: 'encode' | 'decode' = 'encode';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  copyOutput() {
    if (navigator && navigator.clipboard && this.output) {
      navigator.clipboard.writeText(this.output);
    }
  }

  process() {
    this.errorMessage = '';
    this.breakdown = [];
    this.output = '';
    if (!this.input) {
      this.errorMessage = 'Please enter text.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      try {
        if (this.mode === 'encode') {
          this.output = btoa(unescape(encodeURIComponent(this.input)));
          this.breakdown = [
            'Text is converted to UTF-8 bytes, then encoded as Base64.',
            `Input: ${this.input}`,
            `Base64: ${this.output}`,
          ];
        } else {
          this.output = decodeURIComponent(escape(atob(this.input)));
          this.breakdown = [
            'Base64 is decoded to bytes, then converted to text.',
            `Base64: ${this.input}`,
            `Output: ${this.output}`,
          ];
        }
      } catch (e) {
        this.errorMessage = 'Invalid input for selected mode.';
      }
      this.isLoading = false;
    }, 300);
  }
}
