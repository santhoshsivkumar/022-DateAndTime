import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hash-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hash-generator.component.html',
  styleUrls: ['./hash-generator.component.css'],
})
export class HashGeneratorComponent {
  input: string = '';
  algorithm: 'SHA-256' | 'SHA-1' = 'SHA-256';
  hash: string = '';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  async generateHash() {
    this.errorMessage = '';
    this.breakdown = [];
    this.hash = '';
    if (!this.input) {
      this.errorMessage = 'Please enter text.';
      return;
    }
    this.isLoading = true;
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(this.input);
      const algo = this.algorithm;
      const buffer = await crypto.subtle.digest(algo, data);
      this.hash = Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
      this.breakdown = [
        `Algorithm: ${algo}`,
        `Input: ${this.input}`,
        `Hash: ${this.hash}`,
      ];
    } catch (e) {
      this.errorMessage = 'Hashing failed.';
    }
    this.isLoading = false;
  }
}
