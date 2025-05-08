import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-encryption-decryption',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-encryption-decryption.component.html',
  styleUrls: ['./text-encryption-decryption.component.css'],
})
export class TextEncryptionDecryptionComponent {
  input: string = '';
  output: string = '';
  mode: 'encrypt' | 'decrypt' = 'encrypt';
  shift: number = 3;
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

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
      if (this.mode === 'encrypt') {
        this.output = this.caesarCipher(this.input, this.shift);
        this.breakdown = [
          `Each letter is shifted by ${this.shift} positions.`,
          `Input: ${this.input}`,
          `Encrypted: ${this.output}`,
        ];
      } else {
        this.output = this.caesarCipher(this.input, 26 - (this.shift % 26));
        this.breakdown = [
          `Each letter is shifted back by ${this.shift} positions.`,
          `Input: ${this.input}`,
          `Decrypted: ${this.output}`,
        ];
      }
      this.isLoading = false;
    }, 300);
  }

  caesarCipher(str: string, shift: number): string {
    return str.replace(/[a-z]/gi, (c) => {
      const base = c >= 'a' && c <= 'z' ? 97 : 65;
      return String.fromCharCode(
        ((c.charCodeAt(0) - base + shift) % 26) + base
      );
    });
  }
}
