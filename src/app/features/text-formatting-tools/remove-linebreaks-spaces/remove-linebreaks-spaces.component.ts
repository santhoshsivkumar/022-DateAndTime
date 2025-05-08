import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remove-linebreaks-spaces',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './remove-linebreaks-spaces.component.html',
  styleUrls: ['./remove-linebreaks-spaces.component.css'],
})
export class RemoveLinebreaksSpacesComponent {
  inputText = '';
  outputText = '';
  removeType: 'linebreaks' | 'spaces' | 'both' = 'linebreaks';
  breakdown: string[] = [];

  process() {
    let text = this.inputText;
    this.breakdown = [];
    if (this.removeType === 'linebreaks') {
      text = text.replace(/[\r\n]+/g, '');
      this.breakdown.push('Removed all line breaks (\n, \r).');
    } else if (this.removeType === 'spaces') {
      text = text.replace(/\s+/g, '');
      this.breakdown.push('Removed all whitespace (spaces, tabs, etc.).');
    } else {
      text = text.replace(/[\r\n]+/g, '').replace(/\s+/g, '');
      this.breakdown.push('Removed both line breaks and all whitespace.');
    }
    this.outputText = text;
    this.breakdown.push(`Input length: ${this.inputText.length}`);
    this.breakdown.push(`Output length: ${this.outputText.length}`);
  }
}
