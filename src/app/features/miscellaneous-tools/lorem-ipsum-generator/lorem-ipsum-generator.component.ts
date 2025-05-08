import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lorem-ipsum-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lorem-ipsum-generator.component.html',
  styleUrls: ['./lorem-ipsum-generator.component.css'],
})
export class LoremIpsumGeneratorComponent {
  paragraphCount = 1;
  outputText = '';
  breakdown: string[] = [];

  private lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`;

  generate() {
    this.outputText = Array(this.paragraphCount).fill(this.lorem).join('\n\n');
    this.breakdown = [
      `Generated ${this.paragraphCount} paragraph(s) of Lorem Ipsum.`,
      'Each paragraph is standard placeholder text.',
    ];
  }

  copyOutput() {
    if (navigator && navigator.clipboard && this.outputText) {
      navigator.clipboard.writeText(this.outputText);
    }
  }
}
