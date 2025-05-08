import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xml-base64-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './xml-base64-converter.component.html',
  styleUrls: ['./xml-base64-converter.component.css'],
})
export class XmlBase64ConverterComponent {
  input: string = '';
  output: string = '';
  mode: 'xml-to-base64' | 'base64-to-xml' = 'xml-to-base64';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  get isXmlOutput() {
    return this.mode === 'base64-to-xml' && this.output && !this.errorMessage;
  }

  prettyXml(xml: string): string {
    // Simple pretty print for XML (not robust, but works for most cases)
    let formatted = '';
    const reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    let pad = 0;
    xml.split('\r\n').forEach((node) => {
      let indent = 0;
      if (node.match(/^<\//)) indent = -1;
      else if (node.match(/^<[^!?]/) && !node.match(/\/>$/)) indent = 1;
      formatted += '  '.repeat(pad) + node + '\n';
      pad += indent;
    });
    return formatted.trim();
  }

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
      this.errorMessage = 'Please enter XML or Base64.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      try {
        if (this.mode === 'xml-to-base64') {
          // Encode XML string to Base64
          this.output = btoa(unescape(encodeURIComponent(this.input)));
          this.breakdown = [
            'XML is converted to UTF-8 bytes, then encoded as Base64.',
            `Input XML: ${this.input}`,
            `Base64: ${this.output}`,
          ];
        } else {
          // Decode Base64 to XML string
          const xml = decodeURIComponent(escape(atob(this.input)));
          this.output = this.prettyXml(xml);
          this.breakdown = [
            'Base64 is decoded to bytes, then converted to XML string.',
            `Base64: ${this.input}`,
            `Output XML: ${xml}`,
          ];
        }
      } catch (e) {
        this.errorMessage = 'Invalid input for selected mode.';
      }
      this.isLoading = false;
    }, 300);
  }
}
