import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-formatter-validator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './json-formatter-validator.component.html',
  styleUrls: ['./json-formatter-validator.component.css'],
})
export class JsonFormatterValidatorComponent {
  inputJson = '';
  outputJson = '';
  isValid = false;
  errorMsg = '';
  breakdown: string[] = [];

  copyOutput() {
    if (navigator && navigator.clipboard && this.outputJson) {
      navigator.clipboard.writeText(this.outputJson);
    }
  }

  formatJson() {
    this.breakdown = [];
    try {
      const obj = JSON.parse(this.inputJson);
      this.outputJson = JSON.stringify(obj, null, 2);
      this.isValid = true;
      this.errorMsg = '';
      this.breakdown.push('Input is valid JSON.');
      this.breakdown.push('Formatted with 2-space indentation.');
    } catch (e: any) {
      this.outputJson = '';
      this.isValid = false;
      this.errorMsg = e.message;
      this.breakdown.push('Input is not valid JSON.');
      this.breakdown.push('Error: ' + e.message);
    }
  }
}
