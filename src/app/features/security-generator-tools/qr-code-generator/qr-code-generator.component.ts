import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr-code-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
})
export class QrCodeGeneratorComponent {
  input: string = '';
  qrDataUrl: string = '';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  async generateQrCode() {
    this.errorMessage = '';
    this.breakdown = [];
    this.qrDataUrl = '';
    if (!this.input) {
      this.errorMessage = 'Please enter text or a URL.';
      return;
    }
    this.isLoading = true;
    // Use a free API for demonstration (for real use, use a library like qrcode)
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        this.input
      )}`;
      this.qrDataUrl = url;
      this.breakdown = [
        'QR code encodes your input as a 2D barcode.',
        'This demo uses a public API for QR code generation.',
        `Input: ${this.input}`,
      ];
    } catch (e) {
      this.errorMessage = 'Failed to generate QR code.';
    }
    this.isLoading = false;
  }
}
