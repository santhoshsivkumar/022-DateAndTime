import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-character-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './word-character-counter.component.html',
  styleUrls: ['./word-character-counter.component.css'],
})
export class WordCharacterCounterComponent {
  input: string = '';
  wordCount: number = 0;
  charCount: number = 0;
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  count() {
    this.errorMessage = '';
    this.breakdown = [];
    if (!this.input) {
      this.wordCount = 0;
      this.charCount = 0;
      this.errorMessage = 'Please enter text.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.charCount = this.input.length;
      this.wordCount = (this.input.trim().match(/\S+/g) || []).length;
      this.breakdown = [
        `Characters: ${this.charCount}`,
        `Words: ${this.wordCount}`,
      ];
      this.isLoading = false;
    }, 200);
  }
}
