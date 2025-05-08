import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uuid-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uuid-generator.component.html',
  styleUrls: ['./uuid-generator.component.css'],
})
export class UuidGeneratorComponent {
  uuid: string = '';
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  generateUuid() {
    this.errorMessage = '';
    this.breakdown = [];
    this.isLoading = true;
    setTimeout(() => {
      // RFC4122 version 4 compliant UUID
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        (c) => {
          const r = (Math.random() * 16) | 0;
          const v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
      this.uuid = uuid;
      this.breakdown = [
        'A UUID is a 128-bit number, displayed in 5 groups separated by hyphens.',
        'Version 4 UUIDs are randomly generated.',
        `Generated: ${uuid}`,
      ];
      this.isLoading = false;
    }, 300);
  }

  copyToClipboard() {
    if (navigator.clipboard && this.uuid) {
      navigator.clipboard.writeText(this.uuid);
    }
  }
}
