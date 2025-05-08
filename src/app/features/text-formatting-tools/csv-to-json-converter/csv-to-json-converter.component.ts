import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-csv-to-json-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './csv-to-json-converter.component.html',
  styleUrls: ['./csv-to-json-converter.component.css'],
})
export class CsvToJsonConverterComponent {
  inputCsv = '';
  outputJson = '';
  errorMsg = '';
  breakdown: string[] = [];

  copyOutput() {
    if (navigator && navigator.clipboard && this.outputJson) {
      navigator.clipboard.writeText(this.outputJson);
    }
  }

  convert() {
    this.breakdown = [];
    try {
      const lines = this.inputCsv.trim().split(/\r?\n/);
      if (lines.length < 2)
        throw new Error('CSV must have at least a header and one row.');
      const headers = lines[0].split(',').map((h) => h.trim());
      const data = lines.slice(1).map((line, idx) => {
        const values = line.split(',').map((v) => v.trim());
        if (values.length !== headers.length)
          throw new Error(
            `Row ${idx + 1} has different number of columns than header.`
          );
        const obj: any = {};
        headers.forEach((h, i) => (obj[h] = values[i]));
        return obj;
      });
      this.outputJson = JSON.stringify(data, null, 2);
      this.errorMsg = '';
      this.breakdown.push('Parsed header: ' + headers.join(', '));
      this.breakdown.push('Parsed ' + data.length + ' data row(s).');
      this.breakdown.push('Converted to JSON array.');
    } catch (e: any) {
      this.outputJson = '';
      this.errorMsg = e.message;
      this.breakdown.push('Error: ' + e.message);
    }
  }
}
